import React from 'react'
import videoImg from "../assets/Images/video.png"
import display from "../assets/Images/DisplayIcon.png"
import display2 from "../assets/Images/DisplayIcon2.png"

const VideoSection = () => {
  return (
    <section className="w-full py-11 mt-16 bg-[#1C4670]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between gap-x-10 text-white">
          
          <div className="flex flex-col gap-5 lg:w-[572px]">
            <h1 className="font-bold text-[24px] sm:text-[34px]">
              Our Video Introductions
            </h1>
            <p className="text-[#AAB5CD] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
              vulputate pellentesque a diam tincidunt apis dui.
            </p>

         
            <div className="flex items-start gap-3 mt-8">
              <img
                src={display}
                alt="icon"
                className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px]"
              />
              <div>
                <h2 className="text-[18px] sm:text-[22px] font-bold">
                  Explore ideas together
                </h2>
                <p className="text-[#AAB5CD] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-3 mt-4">
              <img
                src={display2}
                alt="icon"
                className="w-[40px] sm:w-[48px] h-[40px] sm:h-[48px]"
              />
              <div>
                <h2 className="text-[18px] sm:text-[22px] font-bold">
                  Bring those ideas to life
                </h2>
                <p className="text-[#AAB5CD] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                  Engage audience segments and finally create actionable insights.
                  Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>

          {/* Video Image */}
          <div className="lg:w-[640px] lg:h-[420px] lg:mt-0 mt-10 flex justify-center">
            <img
              src={videoImg}
              alt="video"
              loading="lazy"
              className="w-full max-w-[640px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default VideoSection
