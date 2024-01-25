import React, { useEffect, useState } from 'react';
import JobShows from './jobShows';

const FetureJob = () => {
    const [job,setJob]= useState([])

    const [jobData,setDatalengthh]= useState(4)

    useEffect(()=>{
        fetch('jobs.json')
      .then(response => response.json())
      .then(json =>setJob(json))

    },[])

    return (
        <div>
          
                <h1 className='text-5xl text-center'>FetureJob :{job.length}</h1>
                <p>. Suscipat laudantium, eum qui veritatis! Cumque nostrum dolore, harum explicabo, porro incidunt ratione eum ducimus autedita necessitatibus.</p>
                <div className='grid grid-cols-2 gap-9  px-20 mt-10 '>
                    {
                        job.slice(0, jobData).map(jobsData => <JobShows data = {jobsData}></JobShows>)
                    }
                </div>
                <div className= { jobData === job.length && 'hidden'}>
                    <button onClick={()=> setDatalengthh(job.length)} className=" btn btn-outline btn-secondary" >See All</button>
                </div>
            </div> 
        
    );
};

export default FetureJob;