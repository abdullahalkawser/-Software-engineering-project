import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading}= useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children
    }

    return (
     <Navigate to='/Login'></Navigate>
    );
};

export default PrivateRoute;