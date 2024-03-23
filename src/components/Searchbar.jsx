import React, { useState } from "react";
import Search from "./Search";

import { CiSearch } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { IoIosCloseCircleOutline } from "react-icons/io";

import Button from "./Button";
import Selector from "./Selector";

export default function Searchbar() {
  const [search, setSearch] = useState({
    title: "",
    company: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClear = (name) => {
    console.log(name);
    setSearch((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });
  };

  const handleSubmit = () => {
    setSearch({
      title: "",
      company: "",
      location: "",
    });
  };

  return (
    <section className=" bg-slate-100 p-[1rem] sm:p-[3rem] rounded-lg">
      {/* Search by  */}
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between bg-white p-5 rounded-lg">
        <div className="flex items-center justify-center gap-1">
          <CiSearch fontSize={24} />
          <input
            value={search.title}
            name="title"
            onChange={handleChange}
            type="text"
            className="border-none outline-none p-3 bg-slate-50 text-blue-500 w-3/4"
            placeholder="Search by title"
          />
          <IoIosCloseCircleOutline
            onClick={() => handleClear("title")}
            fontSize={24}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>

        <div className="flex items-center justify-center gap-1">
          <MdHomeFilled fontSize={24} />
          <input
            value={search.company}
            name="company"
            onChange={handleChange}
            type="text"
            className="border-none outline-none p-3 bg-slate-50 text-blue-500 w-3/4"
            placeholder="Search by company"
          />
          <IoIosCloseCircleOutline
            onClick={() => handleClear("company")}
            fontSize={24}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>

        <div className="flex items-center justify-center gap-1">
          <FaLocationDot fontSize={24} />
          <input
            value={search.location}
            name="location"
            onChange={handleChange}
            type="text"
            className="border-none outline-none p-3 bg-slate-50 text-blue-500 w-3/4"
            placeholder="Search by location"
          />
          <IoIosCloseCircleOutline
            onClick={() => handleClear("location")}
            fontSize={24}
            className="cursor-pointer hover:text-blue-500"
          />
        </div>
        <Button onSubmit={handleSubmit}>Search</Button>
      </div>

      {/* Selector by */}
      <div className="hidden lg:flex items-center justify-center gap-12 p-5 rounded-lg mt-4">
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
