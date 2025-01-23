import React from "react";
import Btn from "./Btn";
import { FaArrowRightLong } from "react-icons/fa6";

const Faq = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <div className="w-full py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* FAQ Heading */}
      <div className="text-center mb-6">
        <p className="text-orange-500 font-medium text-[14px]">FAQ</p>
        <h2 className="text-2xl font-bold text-gray-800">
          Frequent Ask Questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex cursor-pointer border-l-4 justify-between items-center bg-white shadow-md rounded-lg px-4 py-3 hover:shadow-lg transition-shadow duration-200"
            style={{
                borderImage: "linear-gradient(180deg, #FFA229 0%, #1C4670 78.12%) 1",
              }}>
            <p className="text-gray-800 font-medium">{faq}</p>
            <span className="text-gray-500 text-xl">&rarr;</span>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-6 text-center flex items-center justify-center">
        <Btn
        text={"Show More"}
        icon={<FaArrowRightLong />}
        classname={"bg-[#1C4670] w-[148px] h-[46px] text-[15px] rounded-md text-white font-semibold flex items-center justify-center gap-x-3 hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26]"}
        />
      </div>
    </div>
  );
};

export default Faq;
