import React from 'react';
import { useNavigate } from 'react-router-dom';
// import image1 from './top-project-1.png'
import behanceLogo from './behance.svg'
import githubLogo from './github.svg'
import linkLogo from './link.svg'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import nextBtn from './right.svg'
import prevBtn from './left.svg'

import './ProjectSlider.css';
import { Navigation, Pagination } from 'swiper/modules';


function ProjectSlider({ projects }) {
    const [swiper, setSwiper] = useState(null);
    const [showLeftNav, setShowLeftNav] = useState(false);
    const [showRightNav, setShowRightNav] = useState(true);

    const handleIconClick = (direction) => {
        if (swiper) {
            if (direction === 'next') {
                swiper.slideNext();
            } else if (direction === 'prev') {
                swiper.slidePrev();
            }
        }
    };


    const updateNavigationVisibility = () => {
        if (swiper) {
            const isBeginning = swiper.isBeginning;
            const isEnd = swiper.isEnd;
            setShowLeftNav(!isBeginning);
            setShowRightNav(!isEnd);
        }
    }


    return (
        <div className='container'>
            <div className='project-slider-section'>
                <div className='project-slider-wrapper'>
                    {projects.length === 0 ? null : (
                        <>
                            <h2>{projects.length === 1 ? 'Our Work' : 'Our Works'}</h2>
                        </>
                    )}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={
                            true
                        }
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '@2.00': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        getSwiper={setSwiper}
                        onInit={(swiper) =>
                            setSwiper(swiper)
                        }
                        onSlideChange={updateNavigationVisibility}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectSingleSlide
                                    project={project}
                                />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next" style={{ display: showRightNav ? 'block' : 'none' }} onClick={() => handleIconClick('next')}>
                            <img src={nextBtn} alt='nextButton' />
                        </div>
                        <div className="swiper-button-prev" style={{ display: showLeftNav ? 'block' : 'none' }} onClick={() => handleIconClick('prev')}>
                            <img src={prevBtn} alt='previousButton' />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}



export function ProjectSingleSlide({ project }) {

    const navigate = useNavigate();
    const maxCharacters = 140;
    const contentText = project.project_description;
    const truncatedContent = contentText.length > maxCharacters
        ? `${contentText.slice(0, maxCharacters)}...`
        : contentText;


    return (
        <div className='project-slide'>
            <img src={project.image} alt='' />
            <div className='project-slide-content'>
                <p>{project.title}</p>
                <p>{truncatedContent}<button onClick={() => navigate(`/projects/${project.id}`)}>read more</button>
                </p>
                <div className='project-slide-links'>
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
    );
}

function loadUrl(url) {
    window.open(url, '_blank');
}

export default ProjectSlider;
