import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            Single blog
        </div>
    );
};

export default SingleBlog;