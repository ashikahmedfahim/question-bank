import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <Container>
            {data.map((quiz) => (
                <div key={quiz.id} className='quiz'>
                    <Image src={quiz.logo} fluid />
                    <p>{quiz.name}</p>
                    <p>Total Questions: {quiz.total}</p>
                    <Link to={`blogs/${quiz.id}`} >
                        <Button>
                            Go to quiz {quiz.id}
                        </Button>
                    </Link>
                </div>
            ))}
        </Container>
    );
};

export default Home;