import React from "react";

import { FaRegBookmark } from "react-icons/fa";

export default function JobCard({ title, location }) {
  return (
    <div className="w-[280px] p-5 bg-slate-100 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-[500]">{title}</h3>
        <span className="flex items-center gap-1 text-blue-500">
          <FaRegBookmark fontSize={24} />
        </span>
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
