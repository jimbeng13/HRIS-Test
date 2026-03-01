package controllers

import (
	"math"
	"time"

	"hris-api/config"
	"hris-api/models"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

// Haversine formula to calculate distance between two lat/long points in meters
func calculateDistance(lat1, lon1, lat2, lon2 float64) float64 {
	const R = 6371000 // Earth radius in meters
	rad := math.Pi / 180

	dLat := (lat2 - lat1) * rad
	dLon := (lon2 - lon1) * rad

	a := math.Sin(dLat/2)*math.Sin(dLat/2) +
		math.Cos(lat1*rad)*math.Cos(lat2*rad)*
			math.Sin(dLon/2)*math.Sin(dLon/2)
	c := 2 * math.Atan2(math.Sqrt(a), math.Sqrt(1-a))

	return R * c
}

// AttendanceInput struct
type AttendanceInput struct {
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	Type      string  `json:"type"` // "Masuk", "Siang", "Pulang"
}

// ClockIn handles the Geofencing Presensi logic
func ClockIn(c *fiber.Ctx) error {
	// 1. Get User ID from JWT context (assuming auth middleware is used)
	userToken := c.Locals("user").(*jwt.Token)
	claims := userToken.Claims.(jwt.MapClaims)
	userID := uint(claims["user_id"].(float64))

	var input AttendanceInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Invalid location data"})
	}

	// 2. Load User and their assigned OPD (Company Branch)
	var user models.User
	if err := config.DB.Preload("OPD").First(&user, userID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"status": "error", "message": "User not found"})
	}

	if user.OPD == nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "User not assigned to an OPD"})
	}

	// 3. Geofence Validation
	distance := calculateDistance(input.Latitude, input.Longitude, user.OPD.Latitude, user.OPD.Longitude)
	if distance > float64(user.OPD.Radius) {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
			"status":  "error",
			"message": "Anda berada di luar radius kantor! Jarak Anda: " + fiber.Map{"dist": math.Round(distance)}["dist"].(string) + "m",
		})
	}

	// 4. Create or Update today's attendance record
	today := time.Now().Truncate(24 * time.Hour)
	now := time.Now()

	var record models.Attendance
	result := config.DB.Where("user_id = ? AND date = ?", userID, today).First(&record)

	if result.RowsAffected == 0 {
		// New record for today (Masuk)
		if input.Type != "Masuk" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Anda belum melakukan absen Masuk!"})
		}
		
		record = models.Attendance{
			UserID: userID,
			Date:   today,
			TimeIn: &now,
			Status: "Hadir",
			LatIn:  input.Latitude,
			LongIn: input.Longitude,
		}
		config.DB.Create(&record)
		
	} else {
		// Update existing record (Siang or Pulang)
		if input.Type == "Siang" {
			if record.TimeSiang != nil {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Sudah absen siang"})
			}
			record.TimeSiang = &now
		} else if input.Type == "Pulang" {
			if record.TimeOut != nil {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Sudah absen pulang"})
			}
			record.TimeOut = &now
		}
		config.DB.Save(&record)
	}

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Presensi " + input.Type + " berhasil terdata!",
		"data":    record,
	})
}

// GetMyAttendance history
func GetMyAttendance(c *fiber.Ctx) error {
	userToken := c.Locals("user").(*jwt.Token)
	claims := userToken.Claims.(jwt.MapClaims)
	userID := uint(claims["user_id"].(float64))

	var history []models.Attendance
	config.DB.Where("user_id = ?", userID).Order("date desc").Find(&history)

	return c.JSON(fiber.Map{
		"status": "success",
		"data":   history,
	})
}
