import React from 'react';
import './FourthAbout.css';
import image from './profile.png'




function PersonSlider() {

    const persons = [
        {
            name: 'John Doe',
            role: 'Frontend Developer',
            image: './profile.png',
        },
        {
            name: 'Jane Smith',
            role: 'UI/UX Designer',
            image: './profile.png',
        },
        {
            name: 'Bob Johnson',
            role: 'Backend Developer',
            image: './profile.png',
        },
        {
            name: 'Sarah Wilson',
            role: 'Product Manager',
            image: './profile.png',
        },
        {
            name: 'Michael Brown',
            role: 'Data Scientist',
            image: './profile.png',
        },
        {
            name: 'Emily Davis',
            role: 'Marketing Specialist',
            image: './profile.png',
        },
        {
            name: 'David Lee',
            role: 'Full Stack Developer',
            image: './profile.png',
        },
        {
            name: 'Olivia White',
            role: 'Graphic Designer',
            image: './profile.png',
        },
        {
            name: 'Chris Miller',
            role: 'Software Engineer',
            image: './profile.png',
        },
    ];
    

    return (
        <div className="person-slider">
            <h2 className="section-header">Meet Our House of Creatives</h2>
            <div className="slider">
                {persons.map((person, index) => (
                    <div key={index} className="person-card">
                        <div className="person-image">
                            <img src={image} alt={person.name} />
                        </div>
                        <div className="person-info">
                            <div className="person-name">{person.name}</div>
                            <div className="person-role">{person.role}</div>
                            <button className="read-bio-button">Read Bio</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-indicator"> {/* Add your slider indicators here */}</div>
        </div>
    );

}


export default PersonSlider;
