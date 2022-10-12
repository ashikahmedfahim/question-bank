import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    let { data } = useLoaderData();

    data = data.map(dt=> ({id: dt.id, total: dt.total}));
    console.log(data);


    console.log(data);
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <p className='display-4 pb-3'>Quiz Statistics</p>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="id" />
                <YAxis dataKey="total" />
            </LineChart>
        </Container>
    );
};

export default Statistics;