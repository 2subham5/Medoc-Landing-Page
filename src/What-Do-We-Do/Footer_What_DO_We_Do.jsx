// Footer_What_Do_We_DO.js

import React from 'react';

const Footer_What_Do_We_Do = () => {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-gray-600 rounded-xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center md:space-x-10 max-w-6xl mt-20">
      {/* iPhone Image Section */}
      <div className="image-section relative flex justify-center">
        <img
          src="src\What-Do-We-Do\iPhone 15.svg"
          alt="iPhone Illustration"
          className="max-w-[300px] object-contain transition-transform duration-300 transform hover:scale-105 shadow-lg"
        />
        <img
          src="src\What-Do-We-Do\Ellipse 543.svg"
          alt="Shadow"
          className="absolute bottom-[-20px] left-0 right-0 w-[150px] mx-auto opacity-60"
        />
      </div>

      {/* Text Section */}
      <div className="text-section text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold text-white">Medoc Health</h1>
        <p className="text-lg text-gray-300">
          It's Perfect Time To Join The Medoc Ecosystem.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          {/* App Store Button */}
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\What-Do-We-Do\Apple Logo.svg"
              alt="App Store"
              className="w-6"
            />
            <span>Download On The App Store</span>
          </button>
          {/* Google Play Button */}
          <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center space-x-2">
            <img
              src="src\What-Do-We-Do\Google Play.svg"
              alt="Google Play"
              className="w-6"
            />
            <span>Get It On Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer_What_Do_We_Do;
