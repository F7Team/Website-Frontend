import React from 'react';
import './Works.css';
import linkedIn from './linkedin.svg'
import behance from './behance.svg'
import github from './github.svg'


function Works() {

    return (
        <div className='works-section'>
            <div className='container'>
                <div className='work-content'>
                    <h2>Our Works</h2>
                    <div className='works'>
                        <div className='work-item'>
                            <img src={devImage} alt="Works" />
                            <div className='bottom-card'>
                                <p>Edu Tech</p>
                                <p>research at the finest it can be with the latest technology adva...read more</p>
                                <div className='socials'>
                                    <img src={linkedIn} alt="Service 1" />
                                    <img src={behance} alt="Service 1" />
                                    <img src={github} alt="Service 1" />
                                </div>
                            </div>
                        </div>

                        <div className='work-item'>
                            <img src={devImage} alt="Works" />
                            <div className='bottom-card'>
                                <p>Edu Tech</p>
                                <p>research at the finest it can be with the latest technology adva...read more</p>
                                <div className='socials'>
                                    <img src={linkedIn} alt="Service 1" />
                                    <img src={behance} alt="Service 1" />
                                    <img src={github} alt="Service 1" />
                                </div>
                            </div>
                        </div>


                        <div className='work-item'>
                            <img src={devImage} alt="Works" />
                            <div className='bottom-card'>
                                <p>Edu Tech</p>
                                <p>research at the finest it can be with the latest technology adva...read more</p>
                                <div className='socials'>
                                    <img src={linkedIn} alt="Service 1" />
                                    <img src={behance} alt="Service 1" />
                                    <img src={github} alt="Service 1" />
                                </div>
                            </div>
                        </div>

                        <div className='work-item'>
                            <img src={devImage} alt="Works" />
                            <div className='bottom-card'>
                                <p>Edu Tech</p>
                                <p>research at the finest it can be with the latest technology adva...read more</p>
                                <div className='socials'>
                                    <img src={linkedIn} alt="Service 1" />
                                    <img src={behance} alt="Service 1" />
                                    <img src={github} alt="Service 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Works;