import React from "react";
import { IoTimeOutline } from "react-icons/io5";

export default function JobCard({ title, location }) {
  return (
    <div className="w-[280px] shadow-xl p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-[500]">{title}</h3>
        <p className="flex items-center gap-1 text-slate-500">
          <span>
            <IoTimeOutline />
          </span>
          Now
        </p>
      </div>
      <h3 className="text-slate-500 my-3">{location}</h3>
      <hr />
      <p className="text-slate-400 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        nesciunt.
      </p>
      <button className="border border-black px-4 py-3 rounded hover:bg-blue-500 hover:text-white hover:border-none">
        Apply Now
      </button>
    </div>
  );
}
