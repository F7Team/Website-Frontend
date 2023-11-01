import React from 'react';
import './Service.css';
import commentImage from './Comments.png'
import dashboardImage from './dashboard.png'
import mobileImage from './mobile.png'
import devImage from './development.png'



function Service() {

  return (
    <div className="services-section">
      <div className='container'>
        <h2 className="section-title">Services We Offer</h2>
        <div className="service-grid">
          <div className="service-item">
            <img src={devImage} alt="Service 1" />
            <p>Machine</p>
            <p>Learning</p>
          </div>
          <div className="service-item">
            <img src={mobileImage} alt="Service 2" />
            <p>Mobile App</p>
            <p>Development</p>
          </div>
          <div className="service-item">
            <img src={dashboardImage} alt="Service 3" />
            <p>Web App</p>
            <p>Development</p>
          </div>
          <div className="service-item">
            <img src={commentImage} alt="Service 4" />
            <p>UI/UX</p>
            <p>Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
