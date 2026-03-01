package config

import (
	"fmt"
	"log"
	"os"

	"hris-api/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Jakarta",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	// Fallback to local postgres if env not set for rapid dev
	if os.Getenv("DB_HOST") == "" {
		log.Println("Database environment variables not fully set. Attempting default local Postgres connection...")
		dsn = "host=localhost user=postgres password=postgres dbname=hris port=5432 sslmode=disable TimeZone=Asia/Jakarta"
	}

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database! \n", err)
	}

	log.Println("Connected Successfully to Database")

	// Auto Migrate the definitions
	err = database.AutoMigrate(
		&models.User{},
		&models.OPD{},
		&models.Schedule{},
		&models.Attendance{},
		&models.Approval{},
	)
	
	if err != nil {
		log.Fatal("Failed to auto migrate database schemas! \n", err)
	}
	
	log.Println("Database schemas auto migrated.")

	DB = database
}
