import React from 'react';
import { useNavigate } from 'react-router-dom';
import behanceLogo from './behance.svg'
import githubLogo from './github.svg'
import linkLogo from './link.svg'
// import { useState } from 'react';

import './ProjectSlider2.css';



export default function ProjectSlider2({ projects }) {

    const navigate = useNavigate();
    const maxCharacters = 140;

    const truncateText = (description) => {
        const contentText = description;
        const truncatedContent = contentText.length > maxCharacters
            ? `${contentText.slice(0, maxCharacters)}...`
            : contentText;
        return truncatedContent;
    }

    return (
        <div className='projects-slider2'>
            <div className='container'>
                <h2>Our Work</h2>
                <div className='projects-slider2-content'>
                    {projects.map((project) => (
                        <div className='project-slide2'>
                            <img src={project.image} alt='' />
                            <div className='project-slide2-content'>
                                <p>{project.title}</p>
                                <p>{truncateText(project.project_description)}<button onClick={() => navigate(`/projects/${project.id}`)}>read more</button>
                                </p>

                                <div className='project-slide2-links'>
                                    {project.behance !== 'nil' &&
                                        <img src={behanceLogo} alt='project-behance' onClick={() => loadUrl(project.behance)} />
                                    }

                                    {project.github !== 'nil' &&
                                        <img src={githubLogo} alt='project-github' onClick={() => loadUrl(project.github)} />
                                    }

                                    {project.website !== 'nil' &&
                                        <img src={linkLogo} alt='project-weblink' onClick={() => loadUrl(project.website)} />
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


function loadUrl(url) {
    window.open(url, '_blank');
}