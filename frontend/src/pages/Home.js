import React from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>Welcome to Car Management App</h1>
      <p>This is the home page of the application.</p>
      <p>Here you can manage your second-hand car inventory.</p>
      <div className="btn">
      <button className='signinbtn' onClick={()=> Navigate('/signup')}>Sign In</button>
      <button className='loginbtn' onClick={()=> Navigate('/login')}>Log In</button>
      </div>

    </div>
  );
};

export default Home;
