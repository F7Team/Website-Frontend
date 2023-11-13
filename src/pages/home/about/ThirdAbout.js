import React from 'react';
import aboutImage from './about_image.png';
import './ThirdAbout.css';

const ThirdAbout = () => {
    return (
        <section className="third-about">
            <div className="container">
                <div className="third-about-background">
                    <img src={aboutImage} alt="Background" />
                </div>
                <div className="third-about-content">
                    <div className="third-about-header">
                        <h2>why work with us</h2>
                    </div>
                    <div className="third-about-text">
                        <p>At F7, we are trailblazers in the world of technology, dedicated to solving intricate multi-domain challenges. We focus on building innovative and scalable microservices software, that empower businesses to achieve unparalleled success in the digital era.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdAbout;
