import React from 'react';
import './Works.css';
import linkedIn from './linkedin.svg'
import behance from './behance.svg'
import github from './github.svg'
import ProjectSlider from '../../../components/slider/ProjectSlider';


function Works() {

    return (
        <div className='works-section'>
                <div className='work-content'>
                    <ProjectSlider />
                </div>
            </div>
    )

}

export default Works;