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
                <div key={quiz.id} className='quiz d-flex flex-column flex-md-row justify-content-around align-items-center'>
                    <Image src={quiz.logo} fluid />
                    <div className='py-2'>
                        <p>{quiz.name}</p>
                        <p>Total Questions: {quiz.total}</p>
                    </div>
                    <div>
                        <Link to={`blogs/${quiz.id}`} >
                            <Button>
                                Go to quiz {quiz.id}
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Home;