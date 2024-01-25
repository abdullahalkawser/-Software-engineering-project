import React, { useEffect, useState } from 'react';
import TextArea from '../../Home/TextArea';

const RightSideNaveBer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categoris.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-black'>All Categories</h1>
            <ul>
                {categories.map(category => (
                    <li className='ml-10 p-3 text-2xl'>{category.name}</li>
                    
                     
                ))}
            </ul>
            <TextArea></TextArea>       
        </div>
    );
};

export default RightSideNaveBer;
