import React from 'react';
import AppNavBar from '../../components/appnavbar/js/AppNavBar';
import About from './about/About';
import Hero  from './hero/Hero';
import Service from './service/Service'
import Contact from './contact/Contact';
import Works from './works/Works';


export default function Home() {

    return (
        <>
            <AppNavBar />
            <Hero />
            <About />
            <Service />
            <Works />
            <Contact />
        </>
    );
}