import React from 'react';
import backIcon from './contactImg.svg'
import './Contact.css'


export default function Contact() {

    return (
        <div id="contact" className='contact-section'>
            <div className='container'>
                <div className='contact-content'>
                    <div className='back-image'>
                        <img src={backIcon} alt='Contact Page' />
                    </div>
                    <div className='contact-box'>
                        <h2>Get In Touch</h2>
                        <p>want to speak to us? Leave us a message. we will get back
                            to you as soon as possible</p>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email Address' />
                        <textarea
                            placeholder='Message'
                            rows={6}
                        >
                        </textarea>

                    </div>

                </div>

            </div>
        </div>
    )
}