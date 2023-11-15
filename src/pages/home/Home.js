import React, { useState } from 'react';
import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import About from './about/About';
import Hero from './hero/Hero';
import Service from './service/Service';
import Contact from './contact/Contact';
import Works from './works/Works';
import './Home.css'; 

const Home = ({projects}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (id) => {
    toggleMenu();
    const element = document.getElementById(id);

    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop;

      window.scrollTo({
        top: targetPosition - 75,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <AppNavBar
        menuOpen={menuOpen}
        toggleMenu={() => toggleMenu()}
        scrollTo={(id) => scrollTo(id)}
      />
      <div className={`page-content ${menuOpen ? 'inactive' : ''}`}>
        <Hero gotoContact={() => scrollTo('contact')}/>
        <About />
        <Service />
        <Works projects={projects}/>
        <Contact />
      </div>
    </>
  );
};

export default Home;
