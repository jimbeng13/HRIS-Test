package controllers

import (
	"hris-api/config"
	"hris-api/models"

	"github.com/gofiber/fiber/v2"
)

// GetApprovals handler
func GetApprovals(c *fiber.Ctx) error {
	var approvals []models.Approval
	
	// Preload the User to see who asked for it
	if err := config.DB.Order("created_at desc").Find(&approvals).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Could not retrieve approvals",
		})
	}

	return c.JSON(fiber.Map{
		"status": "success",
		"data":   approvals,
	})
}

// CreateApproval handler
func CreateApproval(c *fiber.Ctx) error {
	approval := new(models.Approval)

	if err := c.BodyParser(approval); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid input data",
		})
	}

	if err := config.DB.Create(&approval).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"status":  "error",
			"message": "Could not create approval request",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "success",
		"data":   approval,
	})
}

// UpdateApprovalStatus handler (e.g., to Approve or Reject)
func UpdateApprovalStatus(c *fiber.Ctx) error {
	id := c.Params("id")
	var approval models.Approval

	if err := config.DB.First(&approval, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"status":  "error",
			"message": "Approval request not found",
		})
	}

	// Simple payload structure { "status": "Approved" }
	type UpdateStatusInput struct {
		Status string `json:"status"`
	}
	
	var updateData UpdateStatusInput
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"status":  "error",
			"message": "Invalid status data",
		})
	}

	approval.Status = updateData.Status
	config.DB.Save(&approval)

	return c.JSON(fiber.Map{
		"status":  "success",
		"message": "Approval status updated successfully",
		"data":    approval,
	})
}
