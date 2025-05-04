'use client'; // This marks the component as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');
    setIsLoading(true);

    try {
      // Send login request to the backend API
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: 'dummy@email.com',
      //     password: 'password',
      //   }),
      // });

      // const data = await response.json();

      // if (response.ok) {
      //   // After successful login, navigate to the gallery page
      router.push('/gallery');
      // } else {
      //   // Handle login error
      //   setError(data.message || 'Login failed');
      // }
    } catch (error) {
      // Handle any other errors (e.g., network issues)
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value="email@example.com"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
          {/* Display error message */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
