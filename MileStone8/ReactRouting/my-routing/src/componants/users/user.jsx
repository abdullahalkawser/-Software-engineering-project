import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Userscom from './userShows';


const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1>Users : {users.length}</h1>

            <div className='continar'>
                {
                users.map(userData => <Userscom data = {userData}></Userscom>)
                }
            </div>
        </div>
    );
};

export default Users;