import React from "react";
import JobCard from "./JobCard";
import { jobs } from "../constants/data";

export default function Job() {
  return (
    <section className="mt-6 w-full">
      <h3 className="text-blue-500 uppercase text-2xl text-center font-[500] mt-16 mb-8">
        Explore Jobs
      </h3>
      <div className="p-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 place-items-center grid gap-y-8 ">
        {jobs.map((job, idx) => (
          <JobCard key={idx} title={job.title} location={job.location} />
        ))}
      </div>
      <div className="text-center">
        <button className="border border-blue-500 px-6 py-4 mt-4 text-blue-500 rounded-full">
          View all Jobs
        </button>
      </div>
    </section>
  );
}
