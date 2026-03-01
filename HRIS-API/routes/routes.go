package routes

import (
	"hris-api/controllers"
	"hris-api/middleware"

	"github.com/gofiber/fiber/v2"
)

// SetupRoutes handles centralizing all API path definitions
func SetupRoutes(app *fiber.App) {
	api := app.Group("/api/v1")

	// --- Public Routes ---
	auth := api.Group("/auth")
	auth.Post("/login", controllers.Login)
	auth.Post("/seed", controllers.SeedInitialAdmin) // Just for testing

	// --- Protected Routes (Require JWT) ---
	protected := api.Group("/", middleware.Protected())

	// Attendance routing handles Masuk, Siang, Pulang and History
	attendance := protected.Group("/attendance")
	attendance.Post("/", controllers.ClockIn)
	attendance.Get("/history", controllers.GetMyAttendance)

	// Approvals routing handles Sakit, Izin, and Tugas Luar
	approvals := protected.Group("/approvals")
	approvals.Get("/", controllers.GetApprovals)
	approvals.Post("/", controllers.CreateApproval)
	
	// Admin Only function
	approvals.Put("/:id/status", middleware.AdminOnly(), controllers.UpdateApprovalStatus)
	// Administrator Only Master APIs
	master := protected.Group("/master", middleware.AdminOnly())
	
	master.Get("/opds", controllers.GetOPDs)
	master.Post("/opds", controllers.CreateOPD)
	master.Delete("/opds/:id", controllers.DeleteOPD)

	master.Get("/schedules", controllers.GetSchedules)
	master.Post("/schedules", controllers.CreateSchedule)
	master.Delete("/schedules/:id", controllers.DeleteSchedule)

	master.Get("/users", controllers.GetUsers)

	// --- Reports Routing ---
	reports := protected.Group("/reports", middleware.AdminOnly())
	reports.Get("/daily", controllers.GetDailyRecap)

}
