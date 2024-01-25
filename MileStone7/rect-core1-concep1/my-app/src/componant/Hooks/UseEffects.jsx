import React, { useEffect, useState } from 'react';
import NewsUser from './NewsUser';

const UseEffects = () => {
    const [users,setUsers]= useState([])
  
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
  

    },[])
    return (
        <div>
            <h1>count {users.length}</h1>
            {
                users.map(user => <NewsUser data = {user}></NewsUser>)
            }
            
        </div>
    );
};

export default UseEffects;