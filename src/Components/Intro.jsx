import React from "react";
import Medphone from "./Assets/iPhone16.png";

import Ecosystem from "./Assets/ecosystem.png";

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full  bg-[#41C1BA14] rounded-md mx-auto my-4 p-8  md:p-20">
        <div className="flex flex-col w-3/4 justify-center  ">
          <h1 className="flex justify-center items-center font-bold text-5xl text-justify text-[#2A4755] ">
            BEYOND HEALTHCARE.
          </h1>
          <div className="flex flex-col justify-center items-center m-auto my-12 ">
            <h3 className="flex justify-center items-center font-medium text-m text-justify text-[#2A4755]">
              AI Powered Healthcare Automation System for Hospitals and
              Healthcare Providers.
            </h3>
            <h4 className="flex justify-center items-center font-medium text-m text-justify text-[#2a4755]">
              {" "}
              The single destination for all your healthcare needs.
            </h4>
          </div>
          <div className="flex m-auto my-8 p-4 rounded-md bg-[#41C1BA] text-white font-semibold hover:scale-105 transition delay-130 duration-200 ease-in-out">
            {" "}
            Explore ecosystem
          </div>
        </div>
        <div className="flex">
          <img src={Medphone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
