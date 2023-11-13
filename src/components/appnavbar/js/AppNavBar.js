import React, { useState } from 'react';
import logo from '../logo-image.svg';
import '../css/AppNavBar.css';
import {Link} from 'react-router-dom';
import ScrollHandler from '../js/ScrollHandler'

const AppNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLink = ScrollHandler();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img className='logo-image' src={logo} alt="Logo" />
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul> */}

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</Link></li>
          <li><Link to="/#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</Link></li>
          <li><Link to="/#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About Us</Link></li>
          <li><Link to="/#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;
