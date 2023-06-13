import React, { useState } from 'react';
import CarForm from '../components/Car/CarForm';
import CarList from '../components/Car/CarList';
import CarFilter from '../components/Car/CarFilter';

const CarManagement = () => {
  const [filter, setFilter] = useState(null);

  const handleFilter = (filterOptions) => {
    setFilter(filterOptions);
  };

  return (
    <div>
      <h1>Car Management</h1>
      <CarForm />
      <CarFilter onFilter={handleFilter} />
      <CarList filter={filter} />
    </div>
  );
};

export default CarManagement;
