import React from "react";
import { Link } from "react-router-dom";

const JobShows = ({ data }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = data;
  return (
    <div>
      <div className="card  bg-slate-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{ job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-semibold border rounded mr-4 text-cyan-500">{ remote_or_onsite}</button>
        <button className="px-5 py-2 font-semibold border rounded mr-4 text-cyan-500">{ job_type}</button>

    </div>

    <div className="card-actions">
        <Link to ={`/job/${id}`}>
      Show Details
        </Link>
  
    </div>
  </div>
</div>
    </div>
  );
};

export default JobShows;
