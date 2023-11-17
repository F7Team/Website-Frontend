import React, { useState } from 'react';
import backIcon from './contactImg.svg'
import './Contact.css'
import { toast } from 'react-toastify';



export default function Contact() {

    const apiUrl = `${process.env.REACT_APP_API_BASE_URL}contact-us/`;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Show pending toast
            const promise = toast.promise(
                fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }).then((response) => {
                    if (response.ok) {
                        // Clear input fields
                        setFormData({
                            name: '',
                            email: '',
                            message: '',
                        });

                        // Show success toast
                        return 'Message sent successfully';
                    } else {
                        // Show error toast
                        throw new Error('Error sending message');
                    }
                }),
                {
                    pending: 'Sending...',
                    success: 'Message sent successfully',
                    error: 'Error sending message',
                }
            );

            // You can perform further actions upon successful submission
            await promise;

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='contact-section'>
            <div className='container'>
                <div id="contact" className='contact-content'>
                    <div className='back-image'>
                        <img src={backIcon} alt='Contact Page' />
                    </div>
                    <div className='contact-box'>
                        <h2>Get In Touch</h2>
                        <p>want to speak to us? Leave us a message. we will get back
                            to you as soon as possible</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                placeholder="Message"
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            >
                            </textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}