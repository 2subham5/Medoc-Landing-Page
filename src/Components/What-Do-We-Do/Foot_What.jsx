import React from 'react';
import iPhone from "./iPhone 15.svg"
import Ellipse from "./Ellipse 543.svg"
import { FaGooglePlay,FaApple } from 'react-icons/fa';
const Footer_What_Do_We_Do = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-gray-600 rounded-xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center md:space-x-10 w-full mt-20">
      {/* iPhone Image Section */}
      <div className="image-section relative flex justify-center">
        <img
          src={iPhone}  // Update the path to your actual image
          alt="iPhone Illustration"
          className="max-w-[300px] object-contain transition-transform duration-300 transform hover:scale-105 shadow-lg"
        />
        <img
          src={Ellipse}  // Update the path to your actual image
          alt="Shadow"
          className="absolute bottom-[-20px] left-0 right-0 w-[150px] mx-auto opacity-60"
        />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-white">Medoc Health</h1>
        <p className="text-lg text-gray-300">
          It's the perfect time to join the Medoc ecosystem.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* App Store Button */}
          {/* <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Apple Logo.svg"  // Update the path to your actual image
              alt="App Store"
              className="w-6"
            />
            <span>Download on the App Store</span>
          </button> */}
          {/* Google Play Button */}
          {/* <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\Components\What-Do-We-Do\Google Play.svg"  // Update the path to your actual image
              alt="Google Play"
              className="w-6"
            />
            <span>Get it on Google Play</span>
          </button> */}
          <a href="#" className="inline-flex items-center bg-black text-white px-4 py-4 rounded-lg mt-4 hover:bg-gray-800 transition-colors">
  <FaApple className="mr-2" />
  Get it on the App Store
</a>

          <a href="#" className="inline-flex items-center bg-black text-white px-4 py-4 rounded-lg mt-4 hover:bg-gray-800 transition-colors">
                  <FaGooglePlay className="mr-2" />
                  Get it on Google Play
                </a>
        </div>
      </div>
    </div>
  );
};

export default Footer_What_Do_We_Do;
