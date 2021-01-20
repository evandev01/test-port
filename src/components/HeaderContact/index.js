import React from 'react';
import { Image, Container } from 'react-bootstrap';
import './style.css';
import 'animate.css';
import headerImage from './assets/contactHeader.jpg';
import reactImg from './assets/reactImg.png';

function HeaderContact() {
    return (
        <div>
            <Container>
                    <Image className='animate__animated animate__fadeInLeft' id='header' src={headerImage}>
                    {/* <Image src={reactImg}/> */}
                    </Image>
                    
            </Container>
        </div>
    )
};

export default HeaderContact;