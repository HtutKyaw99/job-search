import React from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Job from "./components/Job";

export default function App() {
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      <Searchbar />
      <Job />
    </div>
  );
}
