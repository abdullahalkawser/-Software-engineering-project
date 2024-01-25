import React from 'react';

const Addcard = ({coursecard}) => {

    return (
        <div className='py-1'>
         
      
        <ul>
            
            <li className="text-sm ">{coursecard.courseName}</li>
        </ul>
        


  
    </div>
    );
};

export default Addcard;