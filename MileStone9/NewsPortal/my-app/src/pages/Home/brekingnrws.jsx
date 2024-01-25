import React from 'react';
import Marquee from "react-fast-marquee";

const BrekingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>BrekingNews</button>
             <Marquee speed={200} pauseOnHover= {true} className='text-4xl'>
            
  I can be a React component, multiple React components, or just some text.
</Marquee>

        </div>
    );
};

export default BrekingNews;