import React, { useState } from 'react';
import { login } from '../../api/userApi';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login API with email and password
      const response = await login(email, password);

      // Handle successful login
      console.log('User logged in successfully:', response);

      // Clear form inputs
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
