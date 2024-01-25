import React from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const posts = useLoaderData()
    const navigate = useNavigate()
    const {postId} = useParams()
    console.log(postId)
    const handle = ()=>{
        navigate(-1)
    }
    return (
        <div style={{ background: 'red',color : 'white', padding: '20px'}}>
            <h1>Post details: {posts.title}</h1>
            <p>{posts.body}</p>
            <button onClick={handle}>Home</button>
        </div>
    );
};

export default PostDetails;