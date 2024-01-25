import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const com = useLoaderData()

    
    return (
        <div>
            <h1>user details : {com.name} </h1>
        </div>
    );
};

export default UserDetails;