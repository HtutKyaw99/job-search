import React from "react";
import JobCard from "./JobCard";
import { jobs } from "../constants/data";

export default function Job() {
  return (
    <div className="mt-6 p-5 flex justify-between items-center">
      {jobs.map((job, idx) => (
        <JobCard key={idx} title={job.title} location={job.location} />
      ))}
    </div>
  );
}
