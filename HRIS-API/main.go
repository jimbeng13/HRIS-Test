package main

import (
	"log"

	"hris-api/config"
	"hris-api/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	// Initialize Database Connection & AutoMigrate
	config.ConnectDB()

	app := fiber.New(fiber.Config{
		AppName: "Smart-Attend AI Backend",
	})

	// Middleware
	app.Use(logger.New())
	app.Use(cors.New())

	// Health Check Route
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "success", "message": "HRIS API is running."})
	})

	// Setup API Routes
	routes.SetupRoutes(app)

	log.Println("Starting server on port 3000...")
	log.Fatal(app.Listen(":3000"))
}
