import React from "react";

export default function Item({ icon, count, label }) {
  return (
    <div className="flex flex-col items-center sm:flex-row gap-3 sm:items-start">
      {icon}
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl">{count}</h3>
        <p className="text-slate-500">{label}</p>
      </div>
    </div>
  );
}
