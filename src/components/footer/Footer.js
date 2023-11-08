import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import logoImage from './footer-logo.png'; // Import your logo image
import instagramIcon from './instagram.svg'; // Import your social media icons
import linkedinIcon from './linkedin.svg';
import whatsappIcon from './whatsapp.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-grid">
                    <div className="grid-item">
                        <img src={logoImage} alt="Logo" />
                        <p> Embark on a transformative journey with F7.</p>
                    </div>
                    <div className="grid-item">
                        <h3>Contact Us</h3>
                        <p>hello@F7.com</p>
                        <p>28, canari wharf, london. australia</p>
                        <p>+1 234 567 890</p>
                    </div>
                    <div className="grid-item">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <img src={instagramIcon} alt="Instagram" />
                            <img src={linkedinIcon} alt="LinkedIn" />
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2023 f7 inc. all rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
