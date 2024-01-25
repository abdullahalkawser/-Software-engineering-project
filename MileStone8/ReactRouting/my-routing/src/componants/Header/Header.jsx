import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <h1>This is  componanat</h1>
      
            <Link to = '/'>Home</Link>
            <Link to = '/user'>Users</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/post'>Post</Link>
            <Link to = '/contact'>Contact</Link>

     
            
        </nav>
    );
};

export default Header;