import React from "react";
import Item from "./Item";

import { FaLocationDot } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";

export default function Why() {
  return (
    <section className="px-5 sm:p-0">
      <h1 className="uppercase text-5xl font-bold text-center mt-16">
        Why we are the best
      </h1>
      <p className="text-center text-slate-500 mt-8">
        We have been helping workers to find their jobs for more than 10 years,
        and it continues to grow.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-evenly my-16 sm:my-32 ">
        <Item
          icon={<RiFilePaper2Line fontSize={48} />}
          label="Job Offer"
          count="1500+"
        />
        <Item
          icon={<FaLocationDot fontSize={48} />}
          label="Location"
          count="100+"
        />
        <Item
          icon={<IoPeople fontSize={48} />}
          label="Community Members"
          count="50,000+"
        />
      </div>
    </section>
  );
}
