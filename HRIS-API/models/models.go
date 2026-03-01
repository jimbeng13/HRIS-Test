package models

import (
	"time"
)

// BaseModel includes standard IDs and Timestamps
type BaseModel struct {
	ID        uint      `gorm:"primaryKey" json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// User model for Admins and ASNs
type User struct {
	BaseModel
	NIP       string    `gorm:"uniqueIndex;not null" json:"nip"`
	Name      string    `gorm:"not null" json:"name"`
	Password  string    `gorm:"not null" json:"-"` // Don't expose password hash
	Role      string    `gorm:"default:'ASN'" json:"role"` // "ADMIN" or "ASN"
	OPDID     *uint     `json:"opd_id"`
	OPD       *OPD      `gorm:"foreignKey:OPDID" json:"opd,omitempty"`
}

// OPD model for Institutions
type OPD struct {
	BaseModel
	Name      string    `gorm:"not null" json:"name"`
	Latitude  float64   `json:"latitude"`
	Longitude float64   `json:"longitude"`
	Radius    int       `json:"radius"` // In meters
}

// Schedule model for shift tracking
type Schedule struct {
	BaseModel
	Title       string `json:"title"`
	Description string `json:"description"`
	Type        string `json:"type"` // "Shift" or "Non-Shift"
	TimeIn      string `json:"time_in"`
	TimeOut     string `json:"time_out"`
}

// Attendance model mapping daily presensi
type Attendance struct {
	BaseModel
	UserID        uint      `json:"user_id"`
	Date          time.Time `gorm:"type:date;not null" json:"date"`
	TimeIn        *time.Time`json:"time_in,omitempty"`
	TimeSiang     *time.Time`json:"time_siang,omitempty"`
	TimeOut       *time.Time`json:"time_out,omitempty"`
	Status        string    `json:"status"` // e.g. "Hadir", "Terlambat", "Alpa"
	LatIn         float64   `json:"lat_in"`
	LongIn        float64   `json:"long_in"`
}

// Approval model for leaves, sickness etc.
type Approval struct {
	BaseModel
	UserID      uint      `json:"user_id"`
	Type        string    `json:"type"` // "Sakit", "Izin", "Cuti Tahunan", "Tugas Luar"
	StartDate   time.Time `gorm:"type:date;not null" json:"start_date"`
	EndDate     time.Time `gorm:"type:date;not null" json:"end_date"`
	TotalDays   int       `json:"total_days"`
	Reason      string    `json:"reason"`
	Attachment  string    `json:"attachment,omitempty"` // Path or URL
	Status      string    `gorm:"default:'Pending'" json:"status"` // "Pending", "Approved", "Rejected"
}
