import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarManagement from './pages/CarManagement';
import './App.css'
const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/car-management" element={<CarManagement/>} />
    </Routes>
      </div>
  );
};

export default App;

