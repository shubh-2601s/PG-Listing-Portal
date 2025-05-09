import React, { useState } from 'react';

function SignupPage({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    if (!username || !password || !confirmPassword) {
      return 'Please fill in all fields';
    }

    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return 'Username can only contain letters, numbers, and underscores';
    }

    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    return null; // No error
  };

  const handleSignup = () => {
    setErrorMessage('');
    setSuccessMessage('');

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    // Save user to localStorage (in a real app, use backend)
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      setErrorMessage('Username already exists');
      return;
    }

    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));

    onSignup(username, password);
    setSuccessMessage('Account created successfully!');

    // Clear fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
