package controllers

import (
	"time"
	"hris-api/config"
	"github.com/gofiber/fiber/v2"
)

// DailyRecapResponse struct matches the tabular data expectations in the Web Dashboard
type DailyRecapResponse struct {
	UserID     uint       `json:"user_id"`
	NIP        string     `json:"nip"`
	Name       string     `json:"name"`
	OPDName    string     `json:"opd_name"`
	Schedule   string     `json:"schedule_title"`
	TimeIn     *time.Time `json:"time_in"`
	TimeSiang  *time.Time `json:"time_siang"`
	TimeOut    *time.Time `json:"time_out"`
	StatusIn   string     `json:"status_in"`   // e.g., "M: Hadir", "M: Terlambat"
	StatusOut  string     `json:"status_out"`  // e.g., "P: Belum Absen", "P: Hadir"
}

// GetDailyRecap calculates and returns the daily attendance matrix
func GetDailyRecap(c *fiber.Ctx) error {
	dateParam := c.Query("date") // Format: "YYYY-MM-DD"
	opdID := c.Query("opd_id")

	if dateParam == "" {
		dateParam = time.Now().Format("2006-01-02")
	}

	// 1. Raw SQL query to join Users with their OPDs, Schedules (mocked for now), and today's Attendance
	query := `
		SELECT 
			u.id as user_id, 
			u.nip, 
			u.name, 
			o.name as opd_name,
			'Reguler 5 Hari' as schedule_title, -- Fallback mock schedule
			a.time_in, 
			a.time_siang, 
			a.time_out,
			CASE WHEN a.time_in IS NOT NULL THEN 'M: Hadir' ELSE 'M: Tanpa Keterangan' END as status_in,
			CASE WHEN a.time_out IS NOT NULL THEN 'P: Selesai' ELSE 'P: Belum Absen' END as status_out
		FROM users u
		LEFT JOIN opds o ON u.opd_id = o.id
		LEFT JOIN attendances a ON u.id = a.user_id AND a.date = ?
		WHERE u.role != 'ADMIN'
	`

	var args []interface{}
	args = append(args, dateParam)

	// Filter by specific OPD if provided
	if opdID != "" {
		query += " AND u.opd_id = ?"
		args = append(args, opdID)
	}

	var recaps []DailyRecapResponse
	if err := config.DB.Raw(query, args...).Scan(&recaps).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Failed to generate daily recap",
			"error":   err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"status": "success",
		"date":   dateParam,
		"data":   recaps,
	})
}
