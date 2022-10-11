import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div>
            {data.map((quiz) => (<div key={quiz.id}>
                <Link to={`blogs/${quiz.id}`} >
                    <Button>
                        go to quiz {quiz.id}
                    </Button>
                </Link>
            </div>))}
        </div>
    );
};

export default Home;