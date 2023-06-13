import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/cars';


export const getAllCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cars');
  }
};

// Fetch filtered cars based on price, color, and mileage
export const getFilteredCars = async (filters) => {
  try {
    const response = await axios.get(`${BASE_URL}`, { params: filters });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch filtered cars');
  }
};



// Edit car details
export const editCar = async (carId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${carId}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to edit car');
  }
};

// Other necessary API functions can be added here







export const getCars = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error retrieving cars:', error);
  }
};

export const createCar = async (carData) => {
  try {
    console.log("carData",carData);
    const response = await axios.post(BASE_URL, carData);
    return response.data;
  } catch (error) {
    console.error('Error creating car:', error);
  }
};

export const deleteCars = async (carId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${carId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting car:', error);
  }
};

export const updateCar = async (carId, carData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${carId}`, carData);
    return response.data;
  } catch (error) {
    console.error('Error updating car:', error);
  }
};

export const searchCarByModel = async (model) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?model=${model}`);
    return response.data;
  } catch (error) {
    console.error('Error searching car by model:', error);
  }
};
