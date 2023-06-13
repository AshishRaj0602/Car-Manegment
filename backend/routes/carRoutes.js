const express = require('express');
const router = express.Router();

const CarController = require('../controllers/CarController');

// Get all cars route
router.get('/cars', CarController.getAllCars);

// Create a car route
router.post('/cars', CarController.createCar);

// Update a car route
router.put('/cars/:id', CarController.updateCar);

// Delete a car route
router.delete('/cars/:id', CarController.deleteCar);

module.exports = router;
