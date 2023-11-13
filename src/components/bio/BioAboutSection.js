import React from 'react';
import profile from '../slider/profile.png'
import './BioAboutSection.css'
import instagramIcon from '../footer/instagram.svg';
import linkedinIcon from '../footer/linkedin.svg';
import whatsappIcon from '../footer/whatsapp.svg';
import Avatar from '../../pages/home/about/Avatar';
import BioSectionAvatar from '../../pages/home/about/BioSectionAvatar';


function BioAboutSection() {

    return (
        <div className='bio-about-section'>
            <div className='container'>
                <div className='bio-about-content'>
                    <BioSectionAvatar />
                    <div className='bio-content-box'>
                        <h2>MichealCodes</h2>
                        <p className='bio-role'>CEO, Software Engineer</p>
                        <p className='text'>with 15 years of experience using flutter, 
                            react and nodejs, michael is a software and 
                            machine learning engineer. referred to as a 
                            rook on the chessboard, he’s a major in 
                            backend development and currently learning 
                            to build ios and macos apps.</p>
                        <div className='bio-social'>
                            <img src={instagramIcon} />
                            <img src={linkedinIcon} />
                            <img src={whatsappIcon} />
                            <img src={instagramIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BioAboutSection;