import React, { useRef, useState, useEffect } from 'react';
import profile from './profile.png'
import readBioButton from './Vector.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BioSlider.css'
import { Navigation, Pagination } from 'swiper/modules';
import darkNextBtn from './next.svg'
import darkPrevBtn from './next.svg'
import nextBtn from './right.svg'
import prevBtn from './left.svg'
import Avatar from '../../pages/home/about/Avatar';




function BioSlider({ page }) {

    const darkTheme = !(page === 'bio')
    const headerText = (page === 'bio') ? 'Other Creatives': 'Meet Our House of Creatives'
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
        <div className={`bio-slider-section ${darkTheme ? 'dark-theme' : ''}`}>
            <div className='container'>
                <div>
                    <h2 className={`${page === 'bio' ? 'bio': ''} `}>{headerText}</h2>
                </div>
                <div>
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
                                spaceBetween: 30,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            '@1.50': {
                                slidesPerView: 3,
                                spaceBetween: 20,
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
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"MichealCodes"} darkTheme={darkTheme} /></SwiperSlide>
                        <SwiperSlide><ProfilePerson name={"JamesCodes"} darkTheme={darkTheme} /></SwiperSlide>

                        <div className="swiper-button-next" style={{ display: showRightNav ? 'block' : 'none' }} onClick={() => handleIconClick('next')}>
                            <img src={darkTheme ? nextBtn : darkNextBtn} />
                        </div>
                        <div className={`swiper-button-prev ${darkTheme ? '' : 'rotate'}`} style={{ display: showLeftNav ? 'block' : 'none' }} onClick={() => handleIconClick('prev')}>
                            <img src={darkTheme ? prevBtn : darkPrevBtn} />
                        </div>

                    </Swiper>
                </div>
            </div>
        </div>

    );
}


function ProfilePerson({ name, darkTheme }) {
    return (
        <div className={`person-container ${darkTheme ? 'dark-theme' : ''}`}>
            <Avatar darkTheme={darkTheme} />
            <p className='person-name'>{name}</p>
            <p className='person-role'>Software Engineer</p>
            <div className='person-read-more'>
                <p>Read Bio</p>
                <div>
                    <img src={readBioButton} />
                </div>
            </div>
        </div>
    )
}


export default BioSlider;