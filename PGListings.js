import React, { useState, useEffect } from 'react';

function PGListings({ onLogout }) {
  const listings = [
    { id: 1, title: "City Comfort PG", location: "City Center", rent: 5000, available: true, description: "Spacious room with AC and attached bathroom." },
    { id: 2, title: "Metro Haven PG", location: "Near Mall", rent: 4500, available: false, description: "Comfortable room with shared kitchen." },
    { id: 3, title: "Green Nest PG", location: "Tech Park", rent: 6000, available: true, description: "Furnished room with Wi-Fi and gym access." },
    { id: 4, title: "Elite Residences", location: "Metro Station", rent: 5500, available: true, description: "Quiet room near metro station, ideal for commuters." },
    { id: 5, title: "Skyline Retreat PG", location: "Suburb", rent: 4000, available: false, description: "Budget-friendly PG with garden view." },
    { id: 6, title: "Urban Stay PG", location: "Business Hub", rent: 7000, available: true, description: "Premium PG with rooftop lounge and workspaces." },
    { id: 7, title: "The Cozy Hive", location: "Old Town", rent: 4800, available: true, description: "Heritage-style PG with beautiful interiors." },
    { id: 8, title: "Horizon Living PG", location: "Food Street", rent: 5300, available: true, description: "PG surrounded by amazing restaurants and cafes." },
    { id: 9, title: "Summit Stay PG", location: "University Area", rent: 4600, available: false, description: "Student-friendly PG with study area." },
    { id: 10, title: "Infinity Comfort PG", location: "Shopping District", rent: 6200, available: true, description: "PG with modern amenities near shopping centers." },
    { id: 11, title: "Peaceful Abode PG", location: "Highway Side", rent: 5000, available: true, description: "PG with excellent connectivity and transport options." },
    { id: 12, title: "Tranquil Nest PG", location: "Seaside", rent: 7500, available: false, description: "PG with a balcony offering beautiful ocean views." },
    { id: 13, title: "Nomad’s Retreat PG", location: "Downtown", rent: 5600, available: true, description: "Modern PG with gym and entertainment area." },
    { id: 14, title: "Sunset View PG", location: "Hilltop", rent: 6800, available: true, description: "PG with breathtaking hilltop scenery." },
    { id: 15, title: "Garden Bliss PG", location: "Green Park", rent: 5900, available: true, description: "Eco-friendly PG surrounded by greenery." },
    { id: 16, title: "Vista Elite PG", location: "Lakeside", rent: 6400, available: false, description: "PG with direct lake access and stunning views." },
    { id: 17, title: "Riverside Residency", location: "Arts District", rent: 4700, available: true, description: "PG near galleries and creative spaces." },
    { id: 18, title: "Serene Shelter PG", location: "Residential Colony", rent: 5100, available: true, description: "PG in a peaceful residential neighborhood." },
    { id: 19, title: "Harbor View PG", location: "City Outskirts", rent: 4400, available: true, description: "Budget PG with spacious living." },
    { id: 20, title: "Zen Living PG", location: "Luxury Zone", rent: 9000, available: true, description: "Premium PG with exclusive concierge services." },
    { id: 21, title: "Student Hub PG", location: "Near Park", rent: 5000, available: true, description: "Spacious room with balcony and garden view." },
    { id: 22, title: "Parkside Residency", location: "Business District", rent: 7000, available: false, description: "High-end PG near office complexes." },
    { id: 23, title: "Luxe Pad PG", location: "Riverside", rent: 6500, available: true, description: "Peaceful PG with river view and walking track." },
    { id: 24, title: "Downtown Den PG", location: "Heritage Zone", rent: 4800, available: true, description: "PG in a culturally rich neighborhood." },
    { id: 25, title: "Cozy Corner PG", location: "Central Market", rent: 5300, available: false, description: "PG within walking distance of shops and cafes." },
    { id: 26, title: "City Heights PG", location: "University Campus", rent: 6000, available: true, description: "Ideal PG for students with library access." },
    { id: 27, title: "The Budget Haven", location: "Sports Complex", rent: 5500, available: true, description: "PG with gym, swimming pool, and courts." },
    { id: 28, title: "Arts District PG", location: "Cultural Hub", rent: 5800, available: true, description: "PG located near theaters and music halls." },
    { id: 29, title: "Serene Stay PG", location: "Countryside", rent: 4500, available: true, description: "PG with open spaces and nature trails." },
    { id: 30, title: "Infinity Living PG", location: "City Heights", rent: 7200, available: true, description: "PG with rooftop cafe and stunning city views." },
  ];
  
  const [filters, setFilters] = useState({ location: "", minRent: "", maxRent: "", available: "" });
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState({ name: '', email: '', age: '', gender: '', image: '' });

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile) setProfile(storedProfile);
  }, []);

  const handleProfileChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setProfile({ ...profile, image: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    }
  };

  const saveProfile = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    setShowProfile(false);
    alert('Profile updated!');
  };

  const filteredListings = listings.filter(pg => (
    (filters.location ? pg.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
    (filters.minRent ? pg.rent >= filters.minRent : true) &&
    (filters.maxRent ? pg.rent <= filters.maxRent : true) &&
    (filters.available !== "" ? pg.available.toString() === filters.available : true)
  ));

  return (
    <div className="App">
      <header className="header">
        <h1>PG Listing Portal</h1>
        <div className="header-buttons">
          {profile.image && <img src={profile.image} alt="Profile" className="profile-thumbnail" />}
          <button className="profile-button" onClick={() => setShowProfile(prev => !prev)}>
            {showProfile ? "Close Profile" : "View/Edit Profile"}
          </button>
          <button className="logout-button" onClick={onLogout}>Logout</button>
        </div>
      </header>

      {showProfile && (
        <div className="login-form" style={{ maxWidth: 400, margin: '20px auto' }}>
          <h2>Edit Profile</h2>
          {profile.image && <img src={profile.image} alt="Profile Preview" className="profile-image-preview" />}
          <input type="file" name="image" accept="image/*" onChange={handleProfileChange} />
          <input type="text" name="name" value={profile.name} onChange={handleProfileChange} placeholder="Name" />
          <input type="email" name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email" />
          <input type="number" name="age" value={profile.age} onChange={handleProfileChange} placeholder="Age" />
          <select name="gender" value={profile.gender} onChange={handleProfileChange}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button onClick={saveProfile}>Save Profile</button>
        </div>
      )}

      <div className="filters">
        <input type="text" placeholder="Location" value={filters.location} onChange={e => setFilters({ ...filters, location: e.target.value })} />
        <input type="number" placeholder="Min Rent" value={filters.minRent} onChange={e => setFilters({ ...filters, minRent: e.target.value })} />
        <input type="number" placeholder="Max Rent" value={filters.maxRent} onChange={e => setFilters({ ...filters, maxRent: e.target.value })} />
        <select value={filters.available} onChange={e => setFilters({ ...filters, available: e.target.value })}>
          <option value="">Availability</option>
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>

      <div className="pg-listings">
        {filteredListings.map(pg => (
          <div key={pg.id} className="pg-card">
            <h3>{pg.title}</h3>
            <p><strong>Location:</strong> {pg.location}</p>
            <p className="rent"><strong>Rent:</strong> ₹{pg.rent}</p>
            <p><strong>Available:</strong> {pg.available ? 'Yes' : 'No'}</p>
            <p className="description">{pg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PGListings;
