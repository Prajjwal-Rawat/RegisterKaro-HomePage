import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navBarLinks } from "../assets/Data/NavTags";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { services } from "../assets/Data/Services";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">
            <a href="/" className="text-blue-500">Register<span className="text-orange-400">Karo</span></a>
          </div>

          <div className="hidden md:flex space-x-6">
            {
              navBarLinks.map((navtag, i) => (
                navtag.title === "Our Services" ? (
                  <div key={i} className='relative cursor-pointer hover:text-gray-400 flex items-center gap-1 group'>
                        {navtag.title}
                        <MdKeyboardArrowDown />

                        <div className='invisible absolute left-[50%] translate-x-[-60%] translate-y-[20%] top-[1.4rem] z-10 flex flex-col rounded-md bg-gray-300 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                          <div className=' absolute left-[60%] top-0 translate-x-[90%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-white'>
                          </div>
                          {
                            services.map((service, i) => (
                              <p key={i} className="text-black hover:text-orange-400">
                                {service.title}
                              </p>
                            ))
                          }

                        </div>
                      </div>
                ):(
                  <Link to={navtag.path} key={i} 
                  className="text-gray-700 hover:text-black"
                  >
                    {navtag.title}
                  </Link>
                )
              ))
            }
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

