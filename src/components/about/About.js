import React from 'react';
import aboutImage from './about_image.png';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-background">
                    <img src={aboutImage} alt="Background Image" />
                </div>
                <div className="about-content">
                    <div className="about-header">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-text">
                        <p> At F7, expertise meets creativity. Our team
                            consists of skilled professionals with
                            diverse knowledge across domains,
                            ensuring that every solution we deliver is
                            backed by technical excellence and innovative
                            thinking. We’re a team of strategists,
                            technologists and artists that work together
                            to understand opportunities, create solutions
                            and transform businesses. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
