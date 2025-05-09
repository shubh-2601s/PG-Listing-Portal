import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure styles are applied

const users = [
  { username: "student1", password: "pass123" },
  { username: "student2", password: "secure456" },
  { username: "admin", password: "admin123" },
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      onLogin(); // Auto-login if session exists
    }
  }, []);

  const handleLogin = () => {
    const userExists = users.find(user => user.username === username && user.password === password);

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists)); // Store session
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1> {/* Moved login heading above the box */}
      <div className="login-form">
        <h2>PG LISTING WEBSITE</h2> 
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
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
