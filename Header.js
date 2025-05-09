import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Add styles if needed

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header>
      <h1>PG Listing Portal</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </header>
  );
}

export default Header;
