import React, { useState, useLayoutEffect } from 'react';
import logo from '../logo-image.svg';
import '../css/AppNavBar.css';
import {Link} from 'react-router-dom';
import ScrollHandler from '../js/ScrollHandler'

const AppNavBar = ({menuOpen, toggleMenu, scrollTo}) => {
  
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const activeLink = ScrollHandler();

  // const toggleMenuContent= ()=>{
  //   toggleMenu();
  // }
  


  useLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log();
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);



  const scrollToSection = (id) => {
    scrollTo(id);
  };
  

  return (
    <nav className={`navbar ${visible ? '' : 'hidden'}`}>
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

        
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</Link></li>
          <li><Link to="/" className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</Link></li>
          <li><Link to="/" className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About Us</Link></li>
          <li><Link to="/" className={`${activeLink === 'contact' ? 'active' : ''} btn`} onClick={() => scrollToSection('contact')}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavBar;
