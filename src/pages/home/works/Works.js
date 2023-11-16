import React from 'react';
import './Works.css';
import ProjectSlider from '../../../components/slider/ProjectSlider';


function Works({projects}) {

    return (
        <div className='works-section'>
            <div className='work-content'>
                <ProjectSlider projects={projects}/>
            </div>
        </div>
    )

}

export default Works;