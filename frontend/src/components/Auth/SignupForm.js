import React, { useState } from 'react';
import { signup } from '../../api/userApi';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Call the signup API with email and password
      const response = await signup(email, password);

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
