import React from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Search({ icon, placeholder }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {icon}
      <input
        type="text"
        className="border-none outline-none p-3 bg-slate-50 text-blue-500 w-3/4"
        placeholder={placeholder}
      />
      <IoIosCloseCircleOutline
        fontSize={24}
        className="cursor-pointer hover:text-blue-500"
      />
    </div>
  );
}
