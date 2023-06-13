import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarManagement from './pages/CarManagement';
import './App.css'
import SignupForm from './components/Auth/SignupForm';
import LoginFrom from './components/Auth/LoginForm';
const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/login" element={<LoginFrom/>}/>
          <Route exact path="/car-management" element={<CarManagement/>} />
    </Routes>
      </div>
  );
};

export default App;

