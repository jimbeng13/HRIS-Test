package controllers

import (
	"hris-api/config"
	"hris-api/models"

	"github.com/gofiber/fiber/v2"
)

// Generic function to simplify getting all records of a specific model type
func getAll(c *fiber.Ctx, model interface{}) error {
	if err := config.DB.Find(model).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Could not fetch data"})
	}
	return c.JSON(fiber.Map{"status": "success", "data": model})
}

// ==== OPD ENDPOINTS ====

func GetOPDs(c *fiber.Ctx) error {
	var opds []models.OPD
	return getAll(c, &opds)
}

func CreateOPD(c *fiber.Ctx) error {
	opd := new(models.OPD)
	if err := c.BodyParser(opd); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Invalid input"})
	}
	config.DB.Create(&opd)
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{"status": "success", "data": opd})
}

func DeleteOPD(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := config.DB.Delete(&models.OPD{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Failed to delete"})
	}
	return c.JSON(fiber.Map{"status": "success", "message": "OPD Deleted"})
}


// ==== SCHEDULE (JADWAL) ENDPOINTS ====

func GetSchedules(c *fiber.Ctx) error {
	var schedules []models.Schedule
	return getAll(c, &schedules)
}

func CreateSchedule(c *fiber.Ctx) error {
	schedule := new(models.Schedule)
	if err := c.BodyParser(schedule); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Invalid input"})
	}
	config.DB.Create(&schedule)
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{"status": "success", "data": schedule})
}

func DeleteSchedule(c *fiber.Ctx) error {
	id := c.Params("id")
	config.DB.Delete(&models.Schedule{}, id)
	return c.JSON(fiber.Map{"status": "success", "message": "Schedule Deleted"})
}


// ==== USERS ENDPOINTS ====

func GetUsers(c *fiber.Ctx) error {
	var users []models.User
	// Preload the OPD data to see what group they belong to, omit passwords
	if err := config.DB.Preload("OPD").Omit("password").Find(&users).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Could not fetch users"})
	}
	return c.JSON(fiber.Map{"status": "success", "data": users})
}
