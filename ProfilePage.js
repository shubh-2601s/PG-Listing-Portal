import React, { useState } from 'react';

function ProfilePage({ onSubmit }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    image: null,
  });

  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (profile.name && profile.email && profile.age && profile.gender) {
      onSubmit(profile);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Please complete all fields.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-form">
        <h1>Complete Your Profile</h1>

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Profile Preview"
            className="profile-image-preview"
          />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
        />
        <select name="gender" value={profile.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button onClick={handleSubmit}>Save Profile</button>

        {success && (
          <p className="success-message">Profile saved successfully!</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
