import React, { useState } from 'react';
import { createCar } from '../../api/carApi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './CarFrom.css'
const CarForm = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [color, setClor] = useState('');
  const [mileage, setMileage] = useState();

  const handleCreateCar = async (e) => {
    e.preventDefault();

    try {
      // Call the createCar API with the car details
      const response = await createCar({ title, description, image,price,color,mileage});

      // Handle successful car creation
      console.log('Car created successfully:', response);
      Swal.fire({
        title: 'Success!',
        text: 'Car created successfully',
        icon: 'success',
      });
      // Clear form inputs
      setPrice(0);
      setImage('');
      setTitle('');
      setMileage(0)
      setClor('');
      setDescription('');
    } catch (error) {
      // Handle car creation error
      Swal.fire({
        title: 'Success!',
        text: 'Plz fill the correct information',
        icon: 'error',
      });
      
      console.error('Car creation failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleCreateCar}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div>
          <label>price:</label>
          <input placeholder='$' type="number" value={price} onChange={(e) => setPrice(e.target.value)} required></input>
        </div>
        <div>
          <label>Color:</label>
          <input type="text" value={color} onChange={(e) => setClor(e.target.value)} required></input>
        </div>
        <div>
          <label>Mileage:</label>
          <input type="number" placeholder='' value={mileage} onChange={(e) => setMileage(e.target.value)} required></input>
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <button type="submit">Create Car</button>
      </form>
    </div>
  );
};

export default CarForm;
