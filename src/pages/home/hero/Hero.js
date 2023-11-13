import React from 'react';
import heroImage from './hero-image.png'
import './Hero.css'; // Import your CSS file for styling

const Hero = () => {
    return (
        <section id='home' className="hero">
            {/* <div className="hero-background"></div> */}
            <div className='container'>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Redefining Solutions Across Domains</h1>
                        <p className="highlighted-text">Need a tech vendor to fulfill your tech innovation?</p>
                        <p>We help businesses and companies turn great ideas into amazing apps, products and services
                        </p>
                        <div className="hero-button">
                            <button>Get In Touch</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
