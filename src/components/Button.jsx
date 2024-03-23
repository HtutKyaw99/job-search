import React from "react";

export default function Button({ children, onSubmit }) {
  return (
    <button
      onClick={onSubmit}
      className="text-white bg-blue-500 p-3 px-8 rounded-lg"
    >
      {children}
    </button>
  );
}
