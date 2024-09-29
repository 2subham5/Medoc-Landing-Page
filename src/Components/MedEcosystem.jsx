import React from "react";
import Ecosystem from "./Assets/ecosystem.png";

const MedEcosystem = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center  ">
        <h2 className="flex justify-center items-center mt-8 m-2 font-semibold text-4xl text-justify text-[#2A4755] ">
          The MEDOC Healthcare Ecosystem
        </h2>
        <h3 className="flex justify-center items-center w-4/5 md:w-2/3 mx-auto mb-4 p-2 font-medium text-m text-wrap text-[#2A4755]">
          "Our ecosystem at MEDOC Health seamlessly connects patients,
          healthcare providers, and technology. By integrating digital tools,
          telemedicine, and data-driven insights, we create a unified platform
          that enhances care delivery, improves communication, and streamlines
          workflows. Together, we empower better health outcomes and a smarter,
          more connected healthcare experience."
        </h3>
      </div>
      <div className="flex w-3/4 md:w-1/2 m-auto justify-between items-center">
        <img src={Ecosystem} alt="" />
      </div>
      <div className="flex justify-center items-center m-4 text-white">
        <button className="w-fit p-2 rounded-md bg-[#2A4755] hover:scale-105 transition delay-130 duration-200 ease-in-out">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default MedEcosystem;
