import React, { useEffect, useState } from 'react';

const RightSideNaveBer = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);

    return (
        <div>
            <h1 className='text-2xl'>All Categories</h1>
       
        </div>
    );
};

export default RightSideNaveBer;
