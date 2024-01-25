import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
   <Header></Header>
           {/* // website er je jinis gula chnage hbe segulake maje outlate dite hbe */}
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Home;