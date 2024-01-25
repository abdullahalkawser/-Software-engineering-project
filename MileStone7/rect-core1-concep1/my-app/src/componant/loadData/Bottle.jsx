// eslint-disable-next-line no-unused-vars
import React from 'react';
import './botle.css'

const Bottle = ({botleData, shpinCrad}) => {
    const {name,img,price}= botleData
    // console.log(botleData.name)
    // console.log(shpinCrad)
    return (
        <div className='btl'>
            <h2>Bottle: {name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>shpinCrad(botleData) }>Purches</button>
        </div>
    );
};

export default Bottle;