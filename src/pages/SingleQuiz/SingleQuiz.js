import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './SingleQuiz.css';

const SingleQuiz = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <Container>
            <p className='display-4 text-center pb-5'>Quiz Topic - {data.name}</p>
            {data.questions.map((question) => (
                <div key={question.id} className='question'>
                    <p className='q-title' >{question.question.replace('<p>', '').replace('</p>', '').replaceAll('&nbsp;', ' ')}</p>
                    <ul>
                        {question.options.map((option, _id) => (
                            <li key={_id}>
                                <p className='option'>{option}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </Container>
    );
};

export default SingleQuiz;