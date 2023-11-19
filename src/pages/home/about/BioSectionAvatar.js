// import profile from './profile.png'
import React from 'react';
import './BioSectionAvatar.css'; // Import your CSS styles

function BioSectionAvatar({image}) {
  return (
    <div className="large-avatar-container">
      <div className="large-avatar-circle">
        <div className="large-avatar-image">
          <img src={image} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default BioSectionAvatar;



