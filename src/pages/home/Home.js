import React, { useState, useEffect } from 'react';
import About from './about/About';
import Hero from './hero/Hero';
import Service from './service/Service';
import Contact from './contact/Contact';
import Works from './works/Works';
import './Home.css';

const Home = ({
  menuOpen,
  locateSection
}) => {

  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://f7team.vercel.app/api/works/';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []); 


  useEffect(() => {
    const apiUrl = 'https://f7team.vercel.app/api/members/';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMembers(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []); 


  return (
    <>
      <div className={`page-content ${menuOpen ? 'inactive' : ''}`}>
        <div className='cover'></div>
        <Hero gotoContact={() => locateSection('contact')} />
        <About persons={members} />
        <Service />
        <Works projects={projects} />
        <Contact />
      </div>
    </>
  );
};

export default Home;
