import React, { useState } from 'react';

const CarFilter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState('');
  const [color, setColor] = useState('');
  const [mileageRange, setMileageRange] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();

    // Construct the filter object with selected filter options
    const filter = {
      priceRange,
      color,
      mileageRange
    };
    
    

    // Pass the filter object to the parent component for handling the filter operation
    onFilter(filter);
  };

  return (
    <div>
      <h2>Car Filter</h2>
      <form onSubmit={handleFilter}>
        <div>
          <label>Price Range:</label>
          <input type="text" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div>
          <label>Mileage Range:</label>
          <input type="text" value={mileageRange} onChange={(e) => setMileageRange(e.target.value)} />
        </div>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default CarFilter;
