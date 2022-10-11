import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container style={{ height: "90vh" }} className='d-flex align-items-center justify-content-center'>
            <div className='text-center display-4'>
                Page Not Found
            </div>
        </Container>
    );
};

export default ErrorPage;