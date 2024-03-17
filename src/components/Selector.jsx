import React from "react";

export default function Selector({ options }) {
  return (
    <div className="flex items-center gap-3">
      <h3>Sort By:</h3>
      <select name="" id="" className="p-1">
        {options.map((option, idx) => (
          <option key={idx} value="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
