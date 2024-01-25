import React from 'react';
import { Outlet } from 'react-router-dom'; // Importing the Outlet component from react-router-dom
import Naveber from '../navber/Navber';

const Root = () => {
    return (
        <div>
            <Naveber></Naveber>
            <Outlet />
        </div>
    );
};

export default Root;
