import React from 'react';
import AboutComp from '../components/AboutComp';
import NavTabs from '../components/NavTabs';
import HeaderAbout from '../components/HeaderAbout';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../assets/reactImg.png';
import '../App.css';

function About() {
    return (
        <div>
                <HeaderAbout/>
                <NavTabs />
                <AboutComp />
        </div>
    )
};

export default About;

// className='animate__animated animate__rotateIn animate__infinite	infinite'