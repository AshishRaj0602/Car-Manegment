import React, { useState, useEffect } from 'react';
import { getFilteredCars, deleteCars } from '../../api/carApi';

const CarList = ({filter}) => {
  const [cars, setCars] = useState([]);
  const [selectedCars, setSelectedCars] = useState([]);

  useEffect(() => {
    // Fetch cars from the backend API
    const fetchCars = async () => {
      try {
        const response = await getFilteredCars(filter);
        console.log("response",response)
        setCars(response);
      } catch (error) {
        console.error('Failed to fetch cars:', error.message);
      }
    };

    fetchCars();
  }, [filter]);

  const handleDeleteSelectedCars = async () => {
    try {
      // Call the deleteCars API with the selected car IDs
      const response = await deleteCars(selectedCars);
      console.log('Cars deleted successfully:', response);

      // Remove the deleted cars from the state
      const updatedCars = cars.filter((car) => !selectedCars.includes(car._id));
      setCars(updatedCars);

      // Clear the selected cars array
      setSelectedCars([]);
    } catch (error) {
      console.error('Failed to delete cars:', error.message);
    }
  };

  const handleCheckboxChange = (e, carId) => {
    const { checked } = e.target;
    console.log(carId, checked)

    if (checked) {
      setSelectedCars([...selectedCars, carId]);
    } else {
      setSelectedCars(selectedCars.filter((id) => id !== carId));
    }
  };

  return (
    <div>
      <h2>Car List</h2>
      <button onClick={handleDeleteSelectedCars} disabled={selectedCars.length === 0}>
        Delete Selected Cars
      </button>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            <input
              type="checkbox"
              checked={selectedCars.includes(car._id)}
              onChange={(e) => handleCheckboxChange(e, car._id)}
            />
            <span>{car.title}</span>
            {/* <button>Edit</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
