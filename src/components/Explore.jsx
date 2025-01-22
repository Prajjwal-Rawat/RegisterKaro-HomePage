import React from 'react';
import { ServicesGrid } from '../assets/Data/servicesGrid';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Btn from './Btn';

const Explore = () => {
  return (
    <section className="w-full py-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <p className="uppercase text-[#EB8D15] text-[14px]">
            Welcome to registerkaro.in
          </p>
          <h2 className="font-bold text-[32px]">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ServicesGrid.map((card, i) => (
            <div key={i} className="flex flex-col gap-y-5 items-center bg-white p-6 shadow-md rounded-lg">
              <img src={card.icon} alt="icon" loading="lazy" className="w-16 h-16" />
              <h2 className="font-bold text-xl">{card.heading}</h2>
              <p className="text-gray-600 text-center">{card.subHeading}</p>
              <button className="text-blue-500 flex items-center gap-x-1 ">
                Learn More
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center mt-10'>
        <Btn
        text={"See All Services"}
        classname={"bg-[#1C4670] w-[162px] h-[52px] rounded-md text-white hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"}
        />
        </div>
      </div>
    </section>
  );
};

export default Explore;
