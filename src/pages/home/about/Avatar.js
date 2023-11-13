import React from 'react';
import profileImage from './profile.png';
import './Avatar.css'; // Import your CSS styles

function Avatar({ darkTheme }) {
  return (
    <div className={`avatar-container ${darkTheme ? 'dark-theme': ''} `}>
      <div className="avatar-circle">
        <div className="avatar-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
