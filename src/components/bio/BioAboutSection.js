import React from 'react';
import './BioAboutSection.css'
// import instagramIcon from '../footer/instagram.svg';
// import whatsappIcon from '../footer/whatsapp.svg';
import linkedinIcon from '../footer/linkedin.svg';
import twitterIcon from '../footer/twitter_x.svg';
import webLinkIcon from '../../pages/projects/link.svg';
import githubIcon from '../../pages/projects/github.svg';
import behanceIcon from '../../pages/projects/behance.svg';
import BioSectionAvatar from '../../pages/home/about/BioSectionAvatar';


function BioAboutSection({ person }) {

    if (!person) {
        return null;
    }

    return (
        <div className='bio-about-section'>
            <div className='container'>
                <div className='bio-about-content'>
                    <BioSectionAvatar image={person.photo} />
                    <div className='bio-content-box'>
                        <h2>{person.name}</h2>
                        <p className='bio-role'>{`${person.position}, ${person.career}`}</p>
                        <p className='text'>{person.about}</p>
                        <div className='bio-social'>
                            {person.linkedin !== 'nil' &&
                                <img src={linkedinIcon} alt='Linkedin link' onClick={() => loadUrl(person.linkedin)} />}
                            {person.behance !== 'nil' &&
                                <img src={behanceIcon} alt='Behance link' onClick={() => loadUrl(person.behance)} />}
                            {person.github !== 'nil' &&
                                <img src={githubIcon} alt='Github link' onClick={() => loadUrl(person.github)} />}
                            {person.twitter !== 'nil' &&
                                <img src={twitterIcon} alt='Twitter link' onClick={() => loadUrl(person.twitter)} />}
                            {person.website !== 'nil' &&
                                <img src={webLinkIcon} alt='weblink' onClick={() => loadUrl(person.website)} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function loadUrl(url) {
    window.open(url, '_blank');
  }


export default BioAboutSection;