import React from 'react';
import logo from '../logo-image.svg';
import '../css/AppNavBar.css'

const AppNavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img className='logo-image' src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;

