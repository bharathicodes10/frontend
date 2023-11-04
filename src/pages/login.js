import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/form.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    // Make an API request to the server to validate the user's credentials
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Store user authentication state (e.g., a token) and set the user in the app
          setUser({ email, isAuthenticated: true });
        } else {
          // Handle login failure, show an error message, etc.
          console.log('Login failed: ' + data.message);
        }
      })
      .catch((error) => {
        // Handle errors from the API request
        console.error('Login error: ' + error);
      });
  };
  

  return (
    <div className="login-container">
      <form onSubmit={(e)=>handleLogin(e)} method="post">
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={(e)=>handleLogin(e)}>Login</button>
        {/* Removed the condition for isRegistered */}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
