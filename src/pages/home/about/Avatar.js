import React from 'react';
import profileImage from './profile.png';
import './Avatar.css'; // Import your CSS styles



function Avatar({image, darkTheme }) {

  // console.log(image)
  return (
    <div className={`avatar-container ${darkTheme ? 'dark-theme': ''} `}>
      <div className="avatar-circle">
        <div className="avatar-image">
          <img src={image} alt="Profile"/>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
