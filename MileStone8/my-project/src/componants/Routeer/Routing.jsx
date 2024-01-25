import React from 'react';

const Rounting = ({route}) => {
    return (

<div>
    <div>
        
    </div>
    <li>
        <a href={route.path}> {route.name}</a>
    </li>
</div>

      
    );
};

export default Rounting;