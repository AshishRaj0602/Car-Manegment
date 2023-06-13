const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.error('Error getting cars:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const { title, description, image, price, color, mileage } = req.body;
    // console.log("title",title);
    // Create a new car instance
    const newCar = new Car({
      title,
      description,
      image,
      price,
      color,
      mileage,
    });
    // Save the car to the database
    await newCar.save();

    res.status(201).json({ message: 'Car created successfully' });
  } catch (error) {
    console.error('Error creating car:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a car
exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, price, color, mileage } = req.body;

    // Find the car in the database and update its properties
    const car = await Car.findByIdAndUpdate(
      id,
      { title, description, image, price, color, mileage },
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car updated successfully' });
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the car in the database and remove it
    const car = await Car.findByIdAndRemove(id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
