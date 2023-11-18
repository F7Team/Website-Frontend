import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import BioPage from './pages/bio/BioPage';
import AppNavBar from './components/appnavbar/js/AppNavBar';
import Home from './pages/home/Home';
import ProjectsPage from './pages/projects/ProjectsPage';
import Footer from './components/footer/Footer'
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Testing data
// import projectData from './test/projects.json'
// import personData from './test/persons.json'



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Only toggle menu if it's a mobile screen
    if (isMobile) {
        setMenuOpen(!menuOpen);
    }
    else setMenuOpen(false)
};
  const locateSection = (id) => {
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

  const scrollTo = (id) => {
    toggleMenu();
    locateSection(id)
  }


  return (
    <div className="App">
      <BrowserRouter>
      <AppNavBar
        menuOpen={menuOpen}
        toggleMenu={() => toggleMenu()}
        scrollTo={(id) => scrollTo(id)}
      />
        <Routes>
          <Route path="/" element={
            <Home
              menuOpen={menuOpen}
              locateSection={locateSection}

            />} />
          <Route path="/bio/:personId" element={
            <BioPage/>

          } />
          <Route path="/projects/:projectId" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
      <ToastContainer />
    </div>
  );
}



export default App;

