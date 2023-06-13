import React from 'react';
import './carFrom.css'
const CarItems = ({ cars, onDelete, onEdit }) => {
  const handleDelete = (carId) => {
    onDelete(carId);
  };

  const handleEdit = (carId) => {
    onEdit(carId);
  };

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id} className='list'>
          <div>
            <img src={car.image} alt={car.title} />
            <h3>{car.title}</h3>
            <p>{car.description}</p>
          </div>
          <div>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
            <button onClick={() => handleEdit(car.id)}>Edit</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarItems;
