import React from 'react';
import aboutImage from './about_image.png';
import './FirstAbout.css';

const FirstAbout = () => {
    return (
        <section id='about' className="about">
            <div className="container">
                <div className="about-background">
                    <img src={aboutImage} alt="Background" />
                </div>
                <div className="about-content">
                    <div className="about-header">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-text">
                        <p> F7 is a team of creative experts who combine technical excellence and innovative thinking to deliver solutions that transform businesses. We have diverse domain knowledge and strategic vision to understand opportunities and create solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstAbout;
