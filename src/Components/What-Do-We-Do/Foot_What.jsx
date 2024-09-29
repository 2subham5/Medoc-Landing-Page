import React from "react";

const Footer_What_Do_We_Do = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-gray-600 rounded-xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center md:space-x-10 max-w-6xl mt-20">
      {/* iPhone Image Section */}
      <div className="image-section relative flex justify-center">
        <img
          src="src\Components\Assets\iPhone16.png" // Update the path to your actual image
          alt="iPhone Illustration"
          className="max-w-[300px] object-contain transition-transform duration-300 transform hover:scale-105 shadow-lg"
        />
        <img
          src="src\Components\What-Do-We-Do\Ellipse 543.svg" // Update the path to your actual image
          alt="Shadow"
          className="absolute bottom-[-20px] left-0 right-0 w-[150px] mx-auto opacity-60"
        />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-white">Medoc Health</h1>
        <p className="text-lg font-semibold text-gray-300">
          It's the perfect time to join the Medoc ecosystem.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* App Store Button */}
          <button className=" bg-black text-white py-2 px-4 rounded-xl flex justify-start items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Apple Logo.svg" // Update the path to your actual image
              alt="App Store"
              className=" flex w-12 h-12"
            />
            <section className="flex flex-col justify-start">
              <span className=" flex justify-start">Download on the</span>
              <span className="flex  justify-start font-semibold text-3xl ">
                App Store
              </span>
            </section>
          </button>
          {/* Google Play Button */}
          <button className="bg-black text-white py-2 px-4 rounded-xl flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Google Play.svg" // Update the path to your actual image
              alt="Google Play"
              className="flex w-12 h-12"
            />
            <section className="flex flex-col justify-start">
              <span className="flex justify-start">Get it on</span>
              <span className="flex justify-start font-semibold text-3xl ">
                Google Play
              </span>
            </section>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer_What_Do_We_Do;
