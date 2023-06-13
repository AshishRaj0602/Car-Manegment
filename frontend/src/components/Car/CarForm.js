import React, { useState } from 'react';
import { createCar } from '../../api/carApi';
import './CarFrom.css'
const CarForm = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [color, setClor] = useState('');
  const [mileage, setMileage] = useState(0);

  const handleCreateCar = async (e) => {
    e.preventDefault();

    try {
      // Call the createCar API with the car details
      const response = await createCar({ title, description, image,price,color,mileage});

      // Handle successful car creation
      console.log('Car created successfully:', response);

      // Clear form inputs
      setImage('');
      setTitle('');
      setDescription('');
    } catch (error) {
      // Handle car creation error
      console.error('Car creation failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleCreateCar}>
        <div>
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required></input>
        </div>
        <div>
          <label>color:</label>
          <input type="text" value={color} onChange={(e) => setClor(e.target.value)} required></input>
        </div>
        <div>
          <label>"mileage":</label>
          <input type="number" value={mileage} onChange={(e) => setMileage(e.target.value)} required></input>
        </div>
        <button type="submit">Create Car</button>
      </form>
    </div>
  );
};

export default CarForm;
