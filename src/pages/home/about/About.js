import React from 'react';
import FirstAbout from './FirstAbout'
import SecondAbout from './SecondAbout'
import ThirdAbout from './ThirdAbout'
import BioSlider from '../../../components/slider/BioSlider';

import personData from './testData/persons.json'


const About = () => {
    return (
        <>
            <FirstAbout />
            <SecondAbout />
            <ThirdAbout />
            <BioSlider page={'home'} persons={personData.persons}/>
        </>
    );
};

export default About;
