import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveStorejob } from "../../utilitis/localstorgare";

const Jobdetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const job = jobs.find((job) => job.id === idint);

  const notify = () => {
    saveStorejob(idint);
    toast("Job applied SucceseFuly!");
  };

  return (
    <div>
      <h1 className="text-center text-5xl">Job Details</h1>

      <div className="grid grid-cols-4 gap-5">
        <div className="space-y-3 bg-stone-200 p-10 text-black border col-span-3">
          <h2 className="text-xl">
            Job Description:{}
            <span className="text-sm">{job.
            }</span>
          </h2>
          <h2>
            Job Responsibility: <span>{job.job_responsibility}</span>
          </h2>
          <h2 className="text-sm">
            Educational Requirements:
            <span>{job.educational_requirements}</span>
          </h2>
          <h2>
            Experiences: <span>{job.experiences}</span>
          </h2>
        </div>
        <div className="bg-stone-200 p-10 text-black border space-y-3">
          <h1>Job Details:</h1>
          <hr />
          <h4>Salary: {job.salary}</h4>
          <h3>Job Title: {job.job_title}</h3>

          <h1>Contact Information</h1>

          <div>
            <h4>Phone: {job.contact_information.phone}</h4>
            <h4>Email: {job.contact_information.email}</h4>
            <h4>Address: {job.contact_information.address}</h4>
          </div>
          <div>
            <button onClick={notify} className=" w-full btn btn-secondary">
              Apply Now
            </button>
            <ToastContainer />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
