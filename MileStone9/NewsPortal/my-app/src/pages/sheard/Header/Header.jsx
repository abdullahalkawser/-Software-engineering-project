import React from 'react';
import moment from 'moment';  
import pic from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center space-y-5'>
          <img className='mx-auto' src={pic} alt=""/>
          <p className='text-xl'>Journalism Without Fear or Favour</p>
         <p className='text-3xl'> {moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
