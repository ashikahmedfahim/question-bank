import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import './SingleQuiz.css';

const SingleQuiz = () => {
    const { data } = useLoaderData();

    const handleAnswer = (ques, ans) => {
        if (ques.correctAnswer === ans) {
            toast.success("Correct Answer!!!");
        } else {
            toast.error("Ups!!! Wrong Answer");
        }
    }

    const handleShowAnswer = (ques) => {
        toast(ques.correctAnswer);
    }

    return (
        <Container>
            <p className='display-4 text-center pb-5'>Quiz Topic - {data.name}</p>
            {data.questions.map((question) => (
                <div key={question.id} className='question'>
                    <div className='d-flex justify-content-between align-items-center pb-3'>
                        <p className='q-title' >{question.question.replace('<p>', '').replace('</p>', '').replaceAll('&nbsp;', ' ')}</p>
                        <FaEye className='show-ans' onClick={() => handleShowAnswer(question)} />
                    </div>
                    <ul>
                        {question.options.map((option, _id) => (
                            <li key={_id}>
                                <p className='option' onClick={() => handleAnswer(question, option)}>{option}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <ToastContainer theme="colored" />
        </Container>
    );
};

export default SingleQuiz;