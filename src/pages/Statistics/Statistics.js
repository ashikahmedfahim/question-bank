import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <Container>
            stat
        </Container>
    );
};

export default Statistics;