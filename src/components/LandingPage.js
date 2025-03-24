// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-container">
        <h1>Welcome to GreenThumb</h1>
        <p>Your one-stop shop for beautiful houseplants to brighten up your home.</p>
        <p>Explore our collection and bring nature indoors today!</p>
      </div>
      <Link to="/products">
        <button className='get-started'>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;