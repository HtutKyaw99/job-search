import React from "react";
import Search from "./Search";

import { CiSearch } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import Selector from "./Selector";

export default function Searchbar() {
  return (
    <section className=" bg-slate-100 p-[3rem] rounded-lg">
      {/* Search by  */}
      <div className="flex items-center justify-between bg-white p-5 rounded-lg">
        <Search
          icon={<CiSearch fontSize={24} />}
          placeholder={"Search by Title ..."}
        />
        <Search
          icon={<MdHomeFilled fontSize={24} />}
          placeholder={"Search by Company ..."}
        />
        <Search
          icon={<FaLocationDot fontSize={24} />}
          placeholder={"Search by Location ..."}
        />
        <Button>Search</Button>
      </div>

      {/* Selector by */}
      <div className="flex items-center justify-center gap-12 p-5 rounded-lg mt-4">
        <Selector
          options={["Relavance", "Inclusive", "Starts with", "Contains"]}
        />
        <Selector options={["Full-time", "Remote", "Contract", "Part-Time"]} />
        <Selector options={["Senior", "Junior", "Advocate"]} />
        <div className="cursor-pointer hover:text-blue-500">
          <h3>Clear All</h3>
        </div>
      </div>
    </section>
  );
}
