import React from 'react';
import aboutImage from './about_image.png';
import FirstAbout from './FirstAbout'
import SecondAbout from './SecondAbout'
import ThirdAbout from './ThirdAbout'
import FourthAbout from './FourthAbout'
import BioSlider from '../../../components/slider/BioSlider';


const About = () => {
    return (
        <>
            <FirstAbout />
            <SecondAbout />
            <ThirdAbout />
            <BioSlider page={'home'}/>
        </>
    );
};

export default About;
