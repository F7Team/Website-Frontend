import React, { useState, useEffect } from 'react';
// import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import { useParams } from 'react-router-dom';
import BioAboutSection from '../../components/bio/BioAboutSection';
import BioSlider from '../../components/slider/BioSlider';

function BioPage() {

    const { personId } = useParams();
    const [members, setMembers] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);


    useEffect(() => {
        const apiUrl = 'https://f7team.vercel.app/api/members/';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log(response);
                return response.json();
            })
            .then(data => {
                // Sort the data array by id in ascending order
                const sortedData = data.slice().sort((a, b) => a.id - b.id);
                setMembers(sortedData);
                // Find and set the selected person
                const person = sortedData.find(member => member.id === Number(personId));
                setSelectedPerson(person);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [personId]);
    


    return (
        <div className='Bio'>
            <BioAboutSection person={selectedPerson} />
            <BioSlider page={'bio'} persons={members} />
        </div>
    );
}

export default BioPage;