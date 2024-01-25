import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostHow from './postshow';

const Post = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>post: {data.length}</h1>
        <div className='continars'>
            {
                data.map(datas => <PostHow datas={datas}></PostHow>)
            }
        </div>
        </div>
    );
};

export default Post;