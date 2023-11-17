import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import logoImage from './footer-logo.png'; // Import your logo image
import linkedinIcon from './linkedin.svg';
import twitterIcon from './twitter_x.svg';

const Footer = () => {
    const linkedin = 'https://www.linkedin.com/company/fantastic7/'
    const twitter = 'https://x.com/F7teamdotcom?t=WeIzLbl3tFj7dBBrnubm5Q&s=09'
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
                            <div>
                                <h3>Contact Us</h3>
                                <div>
                                    <p>fantasticflow7@gmail.com</p>
                                    <p>Lagos, Nigeria</p>
                                    <p>+1 234 567 890</p>
                                </div>

                            </div>
                        </div>

                        <div className='grid-item grid-3'>
                            <div>
                                <h3>Social Media</h3>
                                <div className="social-icons">
                                    <img src={linkedinIcon} alt="LinkedIn" onClick={()=>loadUrl(linkedin)}/>
                                    <img src={twitterIcon} alt="X" onClick={()=>loadUrl(twitter)}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="copyright">
                        &copy; 2023 Fantastic7 | All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};


function loadUrl(url) {
    window.open(url, '_blank');
}



export default Footer;
