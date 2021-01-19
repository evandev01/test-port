import React from 'react';
import { Image, Container, Spinner } from 'react-bootstrap';
import './style.css';
import '../HeaderContact/node_modules/animate.css';

function Header(props) {
    return (
        <div>
            <Container>
                    <Image className='animate__animated animate__backInDown animate__slow 2s' id='header' src={props.background} />
            </Container>
        </div>
    )
};

export default Header;