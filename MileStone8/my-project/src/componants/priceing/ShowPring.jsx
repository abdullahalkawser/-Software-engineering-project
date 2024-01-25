import React from 'react';

const ShowsPrice = ({option}) => {
  console.log(option)
    return (
        <div className='bg-yellow-500 p-2 text-center'>
            
      
          <h1 className='text-2xl text-center'>Price: ${option.price}</h1>

          {
            option.features.map(feture => <li>{feture}</li>)

          }
        </div>
    );
};

export default ShowsPrice;