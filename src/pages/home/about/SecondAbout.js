import React from 'react';
import './SecondAbout.css'; // Import your CSS file for styling
import service1Image from './service1-image.png'; // Import your service images
import service2Image from './service2-image.png';
import service3Image from './service3-image.png';

const SecondAbout = () => {
    return (
        <section className="second-about">
            <div className="container">
                <div className="second-about-header">
                    <h2>What We Provide as a Company</h2>
                </div>
                <div className="service-grid">
                    <div className="service-item">
                        <img src={service1Image} alt="Service 1" />
                        <p>Innovation is at the heart of everything we do. We invest in continuous research and development, staying ahead of the curve and delivering solutions that are not just advanced but also future-proof.</p>
                    </div>
                    <div className="service-item">
                        <img src={service2Image} alt="Service 2" />
                        <p>We value collaboration. Partnering with us means forging a relationship built on mutual understanding and shared goals. We work closely with our clients, tailoring our solutions to meet their unique challenges and aspirations</p>
                    </div>
                    <div className="service-item">
                        <img src={service3Image} alt="Service 3" />
                        <p>F7’s solutions are designed to scale with your ambitions. Whether you're a startup with bold dreams or an established enterprise seeking expansion, our scalable microservices software is the cornerstone of your growth.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondAbout;
