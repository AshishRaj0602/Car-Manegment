import React, { useState } from 'react';
import { signup } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const SignupForm = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Call the signup API with email and password
      const response = await signup(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Successfully Signed Up',
        icon: 'success',
      });
      
      Navigate('/car-management');
      // Handle successful signup
      console.log('User signed up successfully:', response);

      // Clear form inputs
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
