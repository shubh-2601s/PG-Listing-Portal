import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import PGListings from './PGListings';
import './App.css';
import Login from "./Login";


// Get initial theme based on system preference or stored setting
const getInitialDarkMode = () => {
  const storedPreference = localStorage.getItem('darkMode');
  if (storedPreference !== null) {
    return storedPreference === 'true';
  }
  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const profile = JSON.parse(localStorage.getItem('profile'));

    if (user) {
      setIsLoggedIn(true);

      if (
        profile &&
        profile.name &&
        profile.email &&
        profile.age &&
        profile.gender
      ) {
        setHasProfile(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleLogin = (username, password) => {
    localStorage.setItem('user', JSON.stringify({ username }));
    setIsLoggedIn(true);

    const profile = JSON.parse(localStorage.getItem('profile'));
    if (
      profile &&
      profile.name &&
      profile.email &&
      profile.age &&
      profile.gender
    ) {
      setHasProfile(true);
    } else {
      setHasProfile(false);
    }
  };

  const handleProfileSubmit = (profileData) => {
    localStorage.setItem('profile', JSON.stringify(profileData));
    setHasProfile(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setHasProfile(false);
  };

  return (
    <div>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      {isLoggedIn ? (
        hasProfile ? (
          <PGListings onLogout={handleLogout} />
        ) : (
          <ProfilePage onSubmit={handleProfileSubmit} />
        )
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
