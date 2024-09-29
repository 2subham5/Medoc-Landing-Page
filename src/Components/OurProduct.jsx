
import React from 'react';
import Product1 from "./Assets/p1.png";
import Product2 from "./Assets/p2.png";
import Product3 from "./Assets/p3.png";
import Product4 from "./Assets/p4.png";
import Product5 from "./Assets/p5.png";
import "./OurProduct.css"
const OurProduct = () => {
  return (

    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h2 className="Heading text-5xl font-bold text-center text-[#2A4755] mb-4">Our Products.</h2>
      <p className="para text-lg text-center text-[#2A4755] max-w-3xl mx-auto mb-8">
        Medoc Health delivers a smart, connected healthcare ecosystem that
        streamlines diagnostics, treatment, and care management. Simple, fast,
        and patient-focused—transforming healthcare for better outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#EDFCFC] p-6 rounded-lg md:col-span-2 flex flex-col items-center">
          <h3 className="Heading text-3xl font-bold text-[#2A4755] mb-4">HOSPITAL+</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product1}alt="Hospital+ dashboard" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755]  btn text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="Heading text-3xl font-bold text-[#2A4755] mb-4">DOCASSIST</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product2} alt="Docassist app" className="max-w-full h-auto" />

    <div>
      <div className="flex flex-col  justify-center  ">
        <h2 className="flex justify-center items-center mt-2 m-2 font-bold text-5xl text-justify text-[#2A4755] ">
          Our Products.
        </h2>
        <h3 className="flex justify-center items-center md:w-2/4 w-4/5 mx-auto mb-4 p-2 font-medium text-lg text-justify text-[#2A4755]">
          Medoc Health delivers a smart, connected healthcare ecosystem that
          streamlines diagnostics, treatment, and care management. Simple, fast,
          and patient-focused—transforming healthcare for better outcomes.
        </h3>
      </div>
      <div className="flex flex-col  w-full justify-center">
        <div className="flex flex-col  w-full  sm:flex-row justify-center items-center ">
          <div className="flex flex-col  w-2/3 bg-[#EDFCFC] items-center p-2 m-4  ">
            <h3 className="flex text-3xl font-bold m-3 text-[#2A4755]">
              HOSPITAL+
            </h3>
            <img className="flex max-h-68 w-2/4" src={Product1} alt="" />
            <div className="flex m-auto my-8 px-7 p-2 rounded-md bg-[#2A4755] text-white hover:scale-105 transition delay-130 duration-200 ease-in-out">
              {" "}
              View more
            </div>
          </div>
          <div className="flex flex-col  w-1/3  bg-[#EDFCFC]  items-center p-2 ">
            <h3 className="flex text-3xl font-bold m-3 text-[#2A4755]">
              DOCASSIST
            </h3>
            <img className="flex max-h-68 " src={Product2} alt="" />
            <div className="flex m-auto my-8 px-7 p-2 rounded-md bg-[#2A4755] text-white hover:scale-105 transition delay-130 duration-200 ease-in-out">
              {" "}
              View more
            </div>

          </div>
          <button className="bg-[#2A4755] btn text-white px-6 py-2 rounded-md">View more</button>
        </div>

        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="Heading text-3xl font-bold text-[#2A4755] mb-4">MEDOC+</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product3} alt="Medoc+ app" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] btn text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="Heading text-3xl font-bold text-[#2A4755] mb-4">MEDCARD</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product4} alt="Medcard" className="max-w-full h-auto" />
          </div>
          <button className="bg-[#2A4755] btn text-white px-6 py-2 rounded-md">View more</button>
        </div>
        <div className="bg-[#EDFCFC] p-6 rounded-lg flex flex-col items-center">
          <h3 className="Heading text-3xl font-bold text-[#2A4755] mb-4">MEAPP</h3>
          <div className="flex-grow flex items-center justify-center mb-4">
            <img src={Product5} alt="Meapp interface" className="max-w-full h-auto" />

        <div className="flex flex-col  w-full  sm:flex-row justify-center items-center ">
          <div className="flex flex-col bg-[#EDFCFC] mx-auto items-center p-2 sm:m-10">
            <h3 className="flex text-3xl font-bold m-3 text-[#2A4755]">
              MEDOC+
            </h3>
            <img className="flex max-h-68 " src={Product3} alt="" />
            <div className="flex m-auto my-8 px-7 p-2 rounded-md bg-[#2A4755] text-white hover:scale-105 transition delay-130 duration-200 ease-in-out">
              {" "}
              View more
            </div>
          </div>
          <div className="flex flex-col w-2/4 bg-[#EDFCFC] mx-auto items-center p-2 sm:m-10">
            <h3 className="flex text-3xl font-bold m-3 text-[#2A4755]">
              MEDCARD
            </h3>
            <img className="flex max-h-68 " src={Product4} alt="" />
            <div className="flex m-auto my-8 px-7 p-2 rounded-md bg-[#2A4755] text-white hover:scale-105 transition delay-130 duration-200 ease-in-out">
              {" "}
              View more
            </div>
          </div>
          <div className="flex flex-col bg-[#EDFCFC] mx-auto items-center p-2 sm:m-10">
            <h3 className="flex text-3xl font-bold m-3 text-[#2A4755]">
              MEAPP
            </h3>
            <img className="flex max-h-68 " src={Product5} alt="" />
            <div className="flex m-auto my-8 px-7 p-2 rounded-md bg-[#2A4755] text-white hover:scale-105 transition delay-130 duration-200 ease-in-out">
              {" "}
              View more
            </div>

          </div>
          <button className="bg-[#2A4755] btn text-white px-6 py-2 rounded-md">View more</button>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;