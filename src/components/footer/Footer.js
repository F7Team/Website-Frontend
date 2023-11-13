import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import logoImage from './footer-logo.png'; // Import your logo image
import instagramIcon from './instagram.svg';
import linkedinIcon from './linkedin.svg';
import whatsappIcon from './whatsapp.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <div className="footer-content">
                    <div className="footer-grid">
                        <div className="grid-item grid-1">
                            <div>
                                <img src={logoImage} alt="Logo" className='logo' />
                            </div>
                            <p>Embark on transformative journey with F7.</p>
                        </div>


                        <div className="grid-item grid-2">
                            <h3>Contact Us</h3>
                            <div>
                                <p>hello@f7.com</p>
                                <p>28, Canari Wharf, London. United Kingdom</p>
                                <p>+1 234 567 890</p>
                            </div>
                        </div>

                        <div className='grid-item grid-3'>
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
            </div>
        </footer>
    );
};

export default Footer;
