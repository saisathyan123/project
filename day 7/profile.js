import React, { useState } from "react";
import "./profile.css";
import "./home.js";
const Profile = () => {
  const [name, setName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [CompanyAddress, setCompanyAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data processing here

    // Clear the input fields
    setName("");
    setEmail("");
    setCompanyName("");
    setBio("");
  };

  return (
    <div className="profile">
      <center>
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Company Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="bio">Company Address:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <button className="fight" type="submit">
            Save Profile
          </button>
        </form>
      </center>
    </div>
  );
};

export default Profile;
