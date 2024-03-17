import React from "react";

import Google from "../assets/logo/google.png";
import Foodpanda from "../assets/logo/foodpanda.jpg";
import Grab from "../assets/logo/grab.jpg";
import KBZ from "../assets/logo/kbz.png";

export default function Companies() {
  return (
    <section className=" bg-slate-500 mt-8 py-8 gap-8 flex items-center justify-evenly">
      <img src={Google} className="w-[48px]" alt="google logo" />
      <img src={Grab} className="w-[56px] rounded-full" alt="grab logo" />
      <img
        src={Foodpanda}
        className="w-[56px] rounded-full"
        alt="foodpanda logo"
      />
      <img src={KBZ} className="w-[126px] rounded-full" alt="foodpanda logo" />
    </section>
  );
}
