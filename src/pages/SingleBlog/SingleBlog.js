import React from 'react';
import { Container } from 'react-bootstrap';
import './SingleBlog.css';

const SingleBlog = ({ blog }) => {
    return (
        <Container className='blog'>
            <p className='blog-title'>{blog.title}</p>
            <ul className='points'>
                {blog.points.map((point, _id) => (
                    <li key={_id}>{point}</li>
                ))}
            </ul>
        </Container>
    );
};

export default SingleBlog;