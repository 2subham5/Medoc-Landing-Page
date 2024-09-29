// Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="flex flex-col items-center justify-start mt-10 mb-10">
      <h1 className="Heading font-bold text-[#2A4755] bg-white w-[90%] md:w-[437px] h-[52px] flex items-center justify-center text-[24px] md:text-[40px] leading-[30px] md:leading-[60px]">
        What Do We Do?
      </h1>
      
      <p className="para-text   mt-0 w-[100%] md:w-[670px] h-[60px] flex items-center justify-center text-[16px] md:text-[24px] leading-[24px] md:leading-[30.24px]">
        Medoc Health offers a suite of advanced features designed to enhance healthcare delivery.
      </p>
    </div>
  );
}

export default Header;
