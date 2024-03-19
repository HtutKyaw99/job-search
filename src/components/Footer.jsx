import React from "react";
import { category, social } from "../constants/data";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-8 gap-8 bg-slate-500">
      <div className="sm:w-2/5">
        <h1 className="text-white text-3xl mb-4">Jobi</h1>
        <p className="text-slate-300 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          animi, tempora molestias laboriosam voluptatibus quia.
        </p>
        <h6 className="text-white">jobi@gmail.com</h6>
      </div>
      <div className="hidden sm:block">
        <h3 className="text-xl mb-3 text-white">Category</h3>
        {category.map((link, idx) => (
          <p
            key={idx}
            className="text-slate-300 hover:text-slate-100 cursor-pointer"
          >
            {link}
          </p>
        ))}
      </div>
      <div className="hidden sm:block">
        <h3 className="text-xl mb-3 text-white">Follow us</h3>
        {social.map((link, idx) => (
          <p
            key={idx}
            className="text-slate-300 hover:text-slate-100 cursor-pointer"
          >
            {link}
          </p>
        ))}
      </div>
    </footer>
  );
}
