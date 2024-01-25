import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto mb-36'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
         
            <Footer></Footer>
        </div>
    );
};

export default Root;