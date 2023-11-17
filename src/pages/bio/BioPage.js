import React from 'react';
import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import BioAboutSection from '../../components/bio/BioAboutSection';
import BioSlider from '../../components/slider/BioSlider';

function BioPage({
    persons
}) {

    return (
        <div className='Bio'>
            <BioAboutSection />
            <BioSlider page={'bio'} persons={persons} />
        </div>
    );
}

export default BioPage;