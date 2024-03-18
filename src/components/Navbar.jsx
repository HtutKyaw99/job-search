import React from "react";

import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between sm:p-[3rem] p-[1rem]">
      <div>
        <h1 className="text-blue-700 text-3xl">
          Job<strong>i</strong>
        </h1>
      </div>
      <CiMenuFries fontSize={24} className="sm:hidden" />
      <ul className="hidden sm:flex items-center gap-6 cursor-pointer">
        <li className="hover:text-blue-500 text-lg">Jobs</li>
        <li className="hover:text-blue-500 text-lg">About</li>
        <li className="hover:text-blue-500 text-lg">Contact us</li>
      </ul>
    </nav>
  );
}
