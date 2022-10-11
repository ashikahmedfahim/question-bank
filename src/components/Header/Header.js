import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <div className='d-flex align-items-center py-5'>
                <Image src='./favicon.ico' fluid className='logo' />
                <p className='display-4 px-3'>Quesition Bank</p>
            </div>
        </Container>
    );
};

export default Header;