// ScrollHandler.js
import { useEffect, useState } from 'react';

const ScrollHandler = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
    
      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = 70 - (element.offsetTop);
          const offsetBottom = 40 - (offsetTop + element.offsetHeight);
          return window.scrollY >= offsetTop && window.scrollY < offsetBottom;
        }
        return false;
      });
    
      setActiveLink(activeSection || '');
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeLink;
};

export default ScrollHandler;
