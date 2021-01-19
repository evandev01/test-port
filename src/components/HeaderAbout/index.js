import React from 'react';
import { Image, Container, Spinner } from 'react-bootstrap';
import './style.css';
import 'animate.css';
import headerImage from './assets/edev03.jpg';

function HeaderAbout() {
    return (
        <div>
            <Container>
                    <Image 
                    id='header' src={headerImage} />
            </Container>
        </div>
    )
};

export default HeaderAbout;

// className='animate__animated animate__pulse' 