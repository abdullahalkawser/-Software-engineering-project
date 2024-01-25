import React from 'react';
import { Link } from 'react-router-dom';

const Userscom = ({data}) => {
    const {id, name,email,phone}= data
    return (
        <div style={{ background: 'red',color : 'white', padding: '10px'}}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <p>{phone}</p>
            <Link to ={`/user/${id}`}>show Details</Link>
         
        </div>
    );
};

export default Userscom;