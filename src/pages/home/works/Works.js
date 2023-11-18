import React from 'react';
// import ProjectSlider, { ProjectSingleSlide } from '../../../components/slider/ProjectSlider';
import './Works.css';
import ProjectSlider2 from '../../../components/slider/ProjectSlider2';


function Works({ projects }) {


    return (
        <div className='works-section'>
            <ProjectSlider2 projects={projects} />
        </div>
    )
}


export default Works;