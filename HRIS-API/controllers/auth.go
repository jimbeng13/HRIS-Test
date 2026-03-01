package controllers

import (
	"hris-api/config"
	"hris-api/models"
	"hris-api/utils"

	"github.com/gofiber/fiber/v2"
)

// LoginInput struct for parsing req body
type LoginInput struct {
	NIP      string `json:"nip"`
	Password string `json:"password"`
}

// Login handles verifying NIP & Password and returning a JWT
func Login(c *fiber.Ctx) error {
	var input LoginInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"status": "error", "message": "Invalid input"})
	}

	var user models.User
	if err := config.DB.Where("nip = ?", input.NIP).First(&user).Error; err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid NIP or Password"})
	}

	if !utils.CheckPasswordHash(input.Password, user.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"status": "error", "message": "Invalid NIP or Password"})
	}

	token, err := utils.GenerateJWT(user.ID, user.Role)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"status": "error", "message": "Could not generate token"})
	}

	return c.JSON(fiber.Map{
		"status": "success",
		"message": "Logged in successfully",
		"token":  token,
		"data": fiber.Map{
			"id": user.ID,
			"nip": user.NIP,
			"name": user.Name,
			"role": user.Role,
		},
	})
}

// SeedInitialAdmin generates an admin if DB is empty for initial setup
func SeedInitialAdmin(c *fiber.Ctx) error {
	var count int64
	config.DB.Model(&models.User{}).Count(&count)
	
	if count > 0 {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{"status": "error", "message": "Admin already seeded"})
	}

	hash, _ := utils.HashPassword("admin123")
	admin := models.User{
		NIP:      "admin",
		Name:     "Super Admin",
		Password: hash,
		Role:     "ADMIN",
	}

	config.DB.Create(&admin)

	return c.JSON(fiber.Map{"status": "success", "message": "Default admin created. Login with NIP: admin, Password: admin123"})
}
