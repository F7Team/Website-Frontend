import React from 'react';

import image1 from './top-project-1.png'
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


function ProjectSlider() {
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
                    <h2>Our Works </h2>
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
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>
                        <SwiperSlide><ProjectSingleSlide img={image1} /></SwiperSlide>

                        <div className="swiper-button-next" style={{ display: showRightNav ? 'block' : 'none' }} onClick={() => handleIconClick('next')}>
                            <img src={nextBtn} alt='nextButton'/>
                        </div>
                        <div className="swiper-button-prev" style={{ display: showLeftNav ? 'block' : 'none' }} onClick={() => handleIconClick('prev')}>
                            <img src={prevBtn} alt='previousButton'/>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}



function ProjectSingleSlide({ img }) {
    return (
        <div className='project-slide'>
            <img src={img} alt='' />
            <div className='project-slide-content'>
                <p>Fin Tech</p>
                <p>
                    Research at the finest it can be with the latest technology advancement.
                    You can carry out your banking activities with one click.
                    wanna take it for a spin?
                </p>
                <div className='project-slide-links'>
                    <img src={behanceLogo} alt='' />
                    <img src={githubLogo} alt='' />
                    <img src={linkLogo} alt='' />
                </div>
            </div>
        </div>
    );
}

export default ProjectSlider;