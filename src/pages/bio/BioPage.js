import React from 'react';
import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import BioAboutSection from '../../components/bio/BioAboutSection';
import BioSlider from '../../components/slider/BioSlider';

function BioPage(){

    return(
        <div className='Bio'>
            <AppNavBar />
            <BioAboutSection />
            <BioSlider page={'bio'}/>
        </div>
    );
}

export default BioPage;