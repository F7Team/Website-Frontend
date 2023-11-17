import React from 'react';
import './Works.css';
import ProjectSlider, { ProjectSingleSlide } from '../../../components/slider/ProjectSlider';


function Works({ projects }) {


    return (
        <div className='works-section'>
            <div className='work-content'>
                {/* <div>
                    {projects.map((project) => (
                        <ProjectSingleSlide
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div> */}
                <ProjectSlider projects={projects}/>
            </div>
        </div>
    )

}

export default Works;