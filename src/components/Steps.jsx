import React from "react";
import { PiNotebookDuotone } from "react-icons/pi";

export default function Steps() {
  return (
    <section>
      <h1 className="text-center text-3xl mb-16 text-blue-500">
        Simple Steps to get your new job
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="p-5 border-[3px] rounded-lg border-blue-300 text-center">
          <PiNotebookDuotone fontSize={36} className="mx-auto" />
          <h3 className="my-2">Register your account</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            molestiae!
          </p>
        </div>
        <div className="p-5 border-[3px] rounded-lg border-slate-500 text-blue-500 text-center">
          <PiNotebookDuotone fontSize={36} className="mx-auto" />
          <h3 className="my-2">Upload Resume</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            molestiae!
          </p>
        </div>
        <div className="p-5 border-[3px] rounded-lg border-blue-300 text-center">
          <PiNotebookDuotone fontSize={36} className="mx-auto " />
          <h3 className="my-2">Apply for new job</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            molestiae!
          </p>
        </div>
      </div>
    </section>
  );
}
