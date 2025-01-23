import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import phoneImg from "../assets/Images/Phone.png"

const MobileSection = () => {
  return (
    <section className="w-full py-11 bg-[#1C4670]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
      {/* Heading */}
      <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] lg:w-[540px] font-extrabold text-[#FFFFFF]">
        Manage Your Services by your Mobile Phone
      </h1>
      {/* Paragraph */}
      <p className="text-[14px] sm:text-[16px] mt-4 leading-[24px] sm:leading-[26px] lg:w-[490px] text-[#AAB5CD]">
        Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
      </p>
      {/* Get the App Text */}
      <p className="font-medium text-[14px] sm:text-[16px] text-[#FFFFFF] mt-8 sm:mt-10">
        Get the App
      </p>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-4">
        <button className="flex bg-white gap-2 rounded-md justify-center items-center w-[130px] sm:w-[150px] h-[50px] sm:h-[58px] shadow-md shadow-black hover:scale-105 active:scale-100 active:shadow-none">
          <FaApple size={24} className="text-[#A5C937]" />
          <div className="flex flex-col">
            <p className="text-[10px] sm:text-[11px] text-[#000000] font-normal">Get it on</p>
            <p className="text-[12px] sm:text-[14px] font-semibold">App Store</p>
          </div>
        </button>
        <button className="flex bg-white gap-2 rounded-md justify-center items-center w-[130px] sm:w-[150px] h-[50px] sm:h-[58px] shadow-md shadow-black hover:scale-105 active:scale-100 active:shadow-none">
          <FaGooglePlay size={24} className="text-[#A5C937]" />
          <div className="flex flex-col">
            <p className="text-[10px] sm:text-[11px] text-[#000000] font-normal">Get it on</p>
            <p className="text-[12px] sm:text-[14px] font-semibold">Google Play</p>
          </div>
        </button>
      </div>
      {/* Phone Images */}
      <div className="relative mt-8 lg:mt-0">
        <img
          src={phoneImg}
          alt="Phone"
          className="hidden lg:block absolute top-[-340px] max-w-fit left-[500px] "
        />
        <img
          src={phoneImg}
          alt="Phone"
          className="hidden lg:block absolute top-[-500px] left-[900px] max-w-fit"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default MobileSection
