import React from 'react';
import AboutComp from '../components/AboutComp';
import NavTabs from '../components/NavTabs';
import HeaderAbout from '../components/HeaderAbout';

function About() {
    return (
        <div>
            <HeaderAbout />
            <NavTabs />
            <AboutComp />
        </div>
    )
};

export default About;