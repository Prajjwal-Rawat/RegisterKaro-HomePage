import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const FormSection = () => {
    return (
        <section className="w-full relative z-10 bg-colon py-11">
        <div className="text-white flex flex-col items-center gap-4 px-4">
          {/* Header Text */}
          <p className="uppercase font-semibold text-[12px] md:text-[14px] text-center">
            1% of the industry
          </p>
          <h1 className="font-bold text-[24px] md:text-[32px] text-center leading-snug">
            Welcome to your new digital reality. Now.
          </h1>
      
          {/* Input Field */}
          <div className="relative mt-3 w-full max-w-[300px] md:max-w-[502px]">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 text-black py-2 pr-12 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <button
              className="absolute right-0 top-0 bottom-0 px-4 bg-[#FFA229] text-white hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
      
          {/* Features List */}
          <div className="flex flex-wrap gap-x-5 gap-y-3 mt-6 justify-center">
            <span className="flex items-center gap-3 text-sm md:text-base">
              <FaCheckCircle /> Instant results
            </span>
            <span className="flex items-center gap-3 text-sm md:text-base">
              <FaCheckCircle /> User-friendly interface
            </span>
            <span className="flex items-center gap-3 text-sm md:text-base">
              <FaCheckCircle /> Personalized customization
            </span>
          </div>
        </div>
      </section>
      
    )
}

export default FormSection
