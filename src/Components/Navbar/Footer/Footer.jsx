import React from "react";
import medocNav from "../../../Images/logo-nav.png";
import { FaGooglePlay } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="custom-footer g-white text-gray-800 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={medocNav} alt="MEDOC Logo" className="h-8 mr-2" />
            </div>
            <p className="text-sm mb-6">
              The complete healthcare ecosystem building towards better
              accessibility to healthcare and supporting you with medical
              finances and family medicine.
            </p>
          </div>


              </div>
              <p className="Footer-para  mb-6">
                The complete healthcare ecosystem building towards better
                accessibility to healthcare and supporting you with medical
                finances and family medicine.
              </p>
            </div>
            
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold heading-links text-lg mb-4">Useful Links</h3>
                <ul className="space-y-2 ul-font-style text-sm">
                  <li><a href="#" className="hover:text-teal-500">How it Works?</a></li>
                  <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-teal-500">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-teal-500">Refund policy</a></li>
                  <li><a href="#" className="hover:text-teal-500">Career</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-links font-semibold text-lg mb-4">Support</h3>
                <ul className="ul-font-style space-y-2 text-sm">
                  <li><a href="#" className="hover:text-teal-500">FAQs</a></li>
                  <li><a href="#" className="hover:text-teal-500">Contact Us</a></li>
                  <li><a href="/mePolicy" className="hover:text-teal-500">Me Privacy Policy</a></li>
                </ul>
                <a href="#" className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800 transition-colors">
                  <FaGooglePlay className="mr-2" />
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
          
          <div className="heading-links mt-8 pt-4 border-t border-gray-200 text-center text-sm">
            © 2024 Medoc Health IT Pvt. Ltd, All rights reserved
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-500">
                    How it Works?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-500">
                    Me Privacy Policy
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-800  hover:scale-105 transition delay-130 duration-200 ease-in-out"
              >
                <FaGooglePlay className="mr-2" />
                Get it on Google Play
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm">
          © 2024 Medoc Health IT Pvt. Ltd, All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
