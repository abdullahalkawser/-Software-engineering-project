import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getjobapplication } from '../../utilitis/localstorgare';

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [appliedJobsDisplay, setAppliedJobsDisplay] = useState([]);

    const handleFilter = filter => {
        if (filter === 'all') {
            setAppliedJobsDisplay(appliedJobs);

        } 
        else if (filter === 'remote') {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setAppliedJobsDisplay(remote);

        }
         else if (filter === 'onsite') {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setAppliedJobsDisplay(onsite);
        }
    };

    useEffect(() => {
        const storeJob = getjobapplication();

        if (jobs.length > 0) {
            const jobApplied = jobs.filter(job => storeJob.includes(job.id));
            setAppliedJobs(jobApplied);
            setAppliedJobsDisplay(jobApplied); // Set initial display to all applied jobs
        }
    }, [jobs]);

    return (
        <div>
            <h1>Applied Jobs: {appliedJobs.length}</h1>
          <div className='text-end'>
          <details className="dropdown ">
                <summary className="m-1 btn">Filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All</a></li>
                    <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
          </div>
            <ul>
                {appliedJobsDisplay.map(appliedJob => (
                    <li key={appliedJob.id}>
                        <h2>{appliedJob.company_name}</h2>
                        <h2>{appliedJob.job_title}</h2>
                        <h2>{appliedJob.remote_or_onsite}</h2>
                        {/* Display other job details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJob;
