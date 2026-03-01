package controllers

import (
	"math"
	"testing"
)

// TestCalculateDistance verifies the Haversine formula
func TestCalculateDistance(t *testing.T) {
	// Monas Jakarta (Lat: -6.175392, Lon: 106.827153)
	// Bundaran HI Jakarta (Lat: -6.195048, Lon: 106.823023)
	// Distance should be ~2.2 km (2220 meters)

	distance := calculateDistance(-6.175392, 106.827153, -6.195048, 106.823023)

	expectedDist := 2235.0 // Approximate meters Let's accept a slight tolerance

	tolerance := 50.0 // +/- 50 meters
	if math.Abs(distance-expectedDist) > tolerance {
		t.Errorf("Expected distance to be around %v meters, got %v meters", expectedDist, distance)
	}

	// Same point should be 0
	distanceZero := calculateDistance(-6.175392, 106.827153, -6.175392, 106.827153)
	if distanceZero != 0 {
		t.Errorf("Expected distance between same points to be 0, got %v", distanceZero)
	}

	// Very short distance calculation (10 meters) to test micro precision
	// Point 1: -6.175392, 106.827153
	// Point 2 (0.0001 deg lat increment): -6.175292, 106.827153 => approx 11.1 meters
	distanceMicro := calculateDistance(-6.175392, 106.827153, -6.175292, 106.827153)
	if math.Abs(distanceMicro-11.1) > 1 {
		t.Errorf("Micro distance failed, expected approx 11.1m, got %v", distanceMicro)
	}
}
