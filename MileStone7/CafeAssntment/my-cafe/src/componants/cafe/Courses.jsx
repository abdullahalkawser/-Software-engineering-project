import React from 'react';

const Courses = ({ coursedata, addcard, totalprice,totalread }) => {
    const { courseName, img, price, readingTime, title } = coursedata;

    const sechandle = () => {
        addcard(coursedata);
        totalprice(price);
        totalread(readingTime)
    };

    return (
        <div>
            <div className='card w-64 h-96 bg-slate-200 shadow-xl space-y-3 px-4'>
                <img className="px-10 pt-10" src={img} alt="" />
                <h1 className='text-center card-title'>{courseName}</h1>
                <p>{title}</p>

                <div className='flex justify-between px-5'>
                    <div>
                        <h3>$ Price:{price}</h3>
                    </div>
                    <div>
                        <h3>Credit: {readingTime}</h3>
                    </div>
                </div>
                <button className='bg-teal-500 px-5 text-white' onClick={sechandle}>
                    Select
                </button>
            </div>
        </div>
    );
};

export default Courses;
