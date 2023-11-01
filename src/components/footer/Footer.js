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
                        <p>Company Description or Logo Text</p>
                    </div>
                    <div className="grid-item">
                        <h3>Contact Us</h3>
                        <p>Email: example@example.com</p>
                        <p>Address: 123 Main St, City</p>
                        <p>Phone: +1 (123) 456-7890</p>
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
                    &copy; 2023 Your Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
