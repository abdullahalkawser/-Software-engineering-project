import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostHow = ({datas}) => {

    const {id,title}= datas
    const navigate = useNavigate()


    const handles = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={{ background: 'red',color : 'white'}}>
          
                <h3>{id}</h3>
                <p>{title}</p>
                <Link to ={`/post/${id}`}>show Details</Link> <br />
                <button onClick={handles}>See all </button>
          
        </div>
    );
};

export default PostHow;