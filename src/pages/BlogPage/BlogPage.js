import React from 'react';
import { Container } from 'react-bootstrap';
import SingleBlog from '../SingleBlog/SingleBlog';

const BlogPage = () => {
    const blogs = [
        {
            title: "What is the purpose of using React Router",
            points: [
                "React Router enables client side routing",
                "Client side routing allows your app to update the URL from a link click without making another request for another document from the server.",
                "This enables faster user experiences",
                "This enables more dynamic user experiences with things like animation."
            ]
        },
        {
            title: "How does Context api works",
            points: [
                "Context api needs to be created at first to use",
                "Then we need to wrap the component by its provider where the context api will be accessible",
                "Finally using useContext we can get our desired value"
            ]
        },
        {
            title: "Describe useRef hook",
            points: [
                "The useRef Hook allows us to get values between renders.",
                "It can be used to get values which we will not save in state and does not require ui update",
                "Using this we can access the DOM directly",
                "We can access the value using by name of the variable.current"
            ]
        },
    ];

    return (
        <Container>
            <p className='display-4 py-5 text-center'>Read the latest blogs here...</p>
            {blogs.map(blog => <SingleBlog blog={blog} />)}
        </Container>
    );
};

export default BlogPage;