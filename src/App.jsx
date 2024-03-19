import React from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Job from "./components/Job";
import Companies from "./components/Companies";
import Why from "./components/Why";
import Footer from "./components/Footer";
import Steps from "./components/Steps";

export default function App() {
  return (
    <div>
      <div className="w-[85%] m-auto">
        <Navbar />
        <Searchbar />
      </div>
      <div className="w-full">
        <Companies />
      </div>
      <div className="w-[85%] m-auto">
        <Why />
        <Steps />
        <Job />
      </div>
      <Footer />
    </div>
  );
}
