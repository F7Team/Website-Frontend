import React from 'react';
import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import image2 from './top-project-2.png'
import behanceLogo from './behance.svg'
import githubLogo from './github.svg'
import linkLogo from './link.svg'
import 'swiper/css';
import 'swiper/css/pagination';


import './ProjectsPage.css';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectSlider from '../../components/slider/ProjectSlider';


function ProjectsPage() {
    return (
        <div className='Projects'>
            <AppNavBar />
            <TopProject />
            <ProjectSlider />
        </div>
    )
}

function TopProject() {
    return (
        <div className='container'>

            <div className='project-page-top-section'>
                <div className='project-page-top-image'>
                    <img src={image2} alt='' />
                </div>
                <div className='project-page-top-text'>
                    <div>
                        <p>Fin  Tech</p>
                        <p>research at the finest it can be with the latest technology advancement.
                            You can carry out your banking activities with one click.
                            wanna take it for a spin?
                        </p>
                    </div>
                    <div className='project-page-top-links'>
                        <img src={behanceLogo} alt='' />
                        <img src={githubLogo} alt='' />
                        <img src={linkLogo} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}




export default ProjectsPage;