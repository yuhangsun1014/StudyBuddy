import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="search-container">
        <input type="text" placeholder="Search By Student Name" className="search-input" />
        <p className="search-by-class">Search By Class</p>
      </div>
    </div>
  );
};

export default Hero;
