import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-[3rem]">
      <div>
        <h1 className="text-blue-700 text-3xl">
          <strong>Job </strong>Search
        </h1>
      </div>
      <ul className="flex items-center gap-6 cursor-pointer">
        <li className="hover:text-blue-500 text-lg">Jobs</li>
        <li className="hover:text-blue-500 text-lg">About</li>
        <li className="hover:text-blue-500 text-lg">Contact us</li>
      </ul>
    </nav>
  );
}
