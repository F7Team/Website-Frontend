import React from 'react';
import FirstAbout from './FirstAbout'
import SecondAbout from './SecondAbout'
import ThirdAbout from './ThirdAbout'
import BioSlider from '../../../components/slider/BioSlider';



const About = ({persons}) => {
    return (
        <>
            <FirstAbout />
            <SecondAbout />
            <ThirdAbout />
            <div id='teams'>
            <BioSlider page={'home'} persons={persons}/>
            </div> 
        </>
    );
};

export default About;
