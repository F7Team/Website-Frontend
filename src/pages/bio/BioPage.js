import React, { useState, useEffect } from 'react';
// import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import { useParams } from 'react-router-dom';
import BioAboutSection from '../../components/bio/BioAboutSection';
import BioSlider from '../../components/slider/BioSlider';

function BioPage() {

    const { personId } = useParams();
    const [members, setMembers] = useState([]);


    useEffect(() => {
        const apiUrl = 'https://f7team.vercel.app/api/members/';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log(response)
                return response.json();
            })
            .then(data => {
                setMembers(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    const person = members.find(member => member.id === Number(personId));
    console.log(person)
    return (
        <div className='Bio'>
            <BioAboutSection person={person} />
            <BioSlider page={'bio'} persons={members} />
        </div>
    );
}

export default BioPage;