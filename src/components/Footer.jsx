import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#011B5B] text-[#AAB5CD] py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <p className="text-lg mb-4 lg:w-[247px]">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4 animate-bounce">
              <a href="#" aria-label="Facebook">
              <FaFacebook size={30}/>
              </a>
              <a href="#" aria-label="Google">
              <FaGoogle size={30}/>
              </a>
              <a href="#" aria-label="Apple">
              <FaApple size={30}/>
              </a>
              <a href="#" aria-label="Instagram">
              <FaInstagram size={30} />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div>
              <h3 className="font-bold text-orange-500 mb-4">START A BUSINESS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Solutions</a></li>
                <li><a href="#" className="hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:underline">Enterprise</a></li>
                <li><a href="#" className="hover:underline">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">GOVERNMENT REGISTRATION</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Partners</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Developers</a></li>
                <li><a href="#" className="hover:underline">App</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">COMPLIANCE & TAX</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Channels</a></li>
                <li><a href="#" className="hover:underline">Scale</a></li>
                <li><a href="#" className="hover:underline">Watch the Demo</a></li>
                <li><a href="#" className="hover:underline">Our Competition</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">BIS & CDSCO</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Leadership</a></li>
                <li><a href="#" className="hover:underline">Media Kit</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white rounded-full p-3"
          onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
            <span className="text-xl">↑</span>
          </button>
          <p className="mt-4 text-sm">© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
