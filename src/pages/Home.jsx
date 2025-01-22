import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import rating from "../assets/Images/Ratings.png"
import trust from "../assets/Images/trust.png"
import banner from "../assets/Images/section1.png"
import { logos } from '../assets/Data/logos';
import Explore from '../components/Explore';
import memberImg from "../assets/Images/member.png"
import Btn from '../components/Btn';
import pattern from "../assets/Images/pattern.png"
import vector from "../assets/Images/Vector.png"
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import InfoGrid from '../components/InfoGrid';

const Home = () => {

    const title = [
        {
            heading: "Annual Compliance"
        },
        {
            heading: "Payroll Services"
        },
        {
            heading: "Company Formation"
        },
        {
            heading: "Annual Compliance"
        },
    ]
    return (
        <div className='font-inter'>
            {/* Section 1 */}
            <section className='bg-section1 w-full h-[585px]'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[81px] flex '>
                    <div>
                        <div className='flex items-center gap-2'>
                            <span>
                                <img src={rating} alt="rating" width={210} height={20} />
                                <p className='absolute lg:top-[144px] lg:left-[187px] font-semibold text-[14px]'>Google Rating</p>
                            </span>
                        </div>
                        <h2 className='font-medium text-[47.85px] leading-[60px] mt-8'>Your trusted partner <br /> for compliance business needs</h2>
                        <div className='w-[40px] h-[1px] bg-[#F60014] mt-3' />
                        <p className='mt-[26px] font-normal text-[20px] w-[660px] text-[#4F4F4F] leading-[28.8px]'>
                            An online business compliance platform that helps entrepreneurs and other individuals with various, <b>registrations, tax filings,</b> and other <b>legal matters.</b>
                        </p>
                        <img src={trust} alt="banner" loading="lazy" className='mt-[35px]' />

                        <div className='flex gap-6 mt-[24px]'>
                            <Btn text={"Talk An Expert"} classname={"bg-[#1C4670] w-[204px] h-[54px] rounded-md text-white font-bold hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"}/>
                            <span className='flex items-center gap-2 '>
                                <FaCirclePlay size={24} className='text-[#FB432C]' />
                                <p className='text-[16px] font-semibold cursor-pointer'>See How it works</p>
                            </span>
                        </div>
                    </div>

                    <div className='flex '>
                        <img src={banner} alt="banner" loading="lazy" className='w-[600px] h-[484px] mt-5' />

                        <div className='flex flex-col gap-10 absolute left-[1263px] top-[129px]'>
                            {
                                title.map((para, i) => (
                                    <p key={i} className='bg-[#FFFFFF] w-[177px] h-[52px] flex items-center font-medium text-[14px] rounded-md shadow-md shadow-[#00000026] justify-center'>
                                        {para.heading}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}

            <section className='w-[1440px] h-[236px]'>

                <div className='mt-20 flex flex-col justify-center gap-y-10 items-center'>
                    <p className='text-[22px] font-bold'>Trusted By Over 100+ Startups and freelance business</p>
                    <div className='flex gap-x-20'>
                        {
                            logos.map((icon, i) => (
                                <img src={icon.logo} alt="icon" loading="lazy" width={137} height={17} />
                            ))
                        }
                    </div>
                </div>

            </section>

            {/* section 3 */}
            <Explore />

            {/* Section 4 */}

            <section className='w-full py-12'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='lg:flex justify-between'>

                        <div className='flex flex-col'>
                            <p className='uppercase text-[#EB8D15] text-[14px] font-normal'>Welcome to registerkaro.in</p>
                            <h2 className=' font-bold text-[32px] leading-[40px] mt-6'>About <span className='text-[#EB8D15]'>Register Karo</span></h2>
                            <div className='w-[644px] flex flex-col gap-y-6'>
                                <p>
                                    We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                                </p>
                                <p>
                                    I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
                                </p>
                            </div>
                          
                          
                           <Btn text={"Learn More"} 
                           classname={"bg-[#1C4670] w-[157px] flex items-center gap-2 justify-center h-[48px] mt-7 rounded-md text-white hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"}
                           icon={<FaRegArrowAltCircleRight />}
                           />
                           
                        </div>

                       <div className='relative'>
                       <img src={memberImg} alt="img" width={510} />
                       <img src={pattern} alt="pattern" className='absolute top-[246px] right-[-60px]' loading="lazy" />
                       <img src={vector} alt="img" className=' absolute top-[-50px] right-[-85px]' />
                       </div>
                    </div>
                </div>
            </section>

            {/* section 5 */}
            <InfoGrid/>
        </div>
    )
}

export default Home
