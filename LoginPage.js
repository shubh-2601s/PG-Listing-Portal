import React, { useState } from 'react';
import SignupPage from './SignupPage'; // Import SignupPage component

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Track if we are on signup page

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      onLogin(username, password);
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  const toggleSignup = () => setIsSignup(!isSignup); // Toggle between login/signup

  return (
    <div className="login-container">
      {/* Login Form */}
      {!isSignup && (
        <>
          <h1>Login</h1> {/* This will appear at the top */}
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <p>
            Don't have an account?{' '}
            <button onClick={toggleSignup}>Sign Up</button>
          </p>
        </>
      )}

      {/* Signup Form */}
      {isSignup && (
        <SignupPage onSignup={onLogin} /> // Pass onLogin to handle signup
      )}
    </div>
  );
}

export default LoginPage;
