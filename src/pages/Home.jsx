import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import rating from "../assets/Images/Ratings.png"
import trust from "../assets/Images/trust.png"
import { RiCustomerService2Fill } from "react-icons/ri";
import banner from "../assets/Images/section1.png"
import { logos } from '../assets/Data/logos';
import Explore from '../components/Explore';
import memberImg from "../assets/Images/member.png"
import Btn from '../components/Btn';
import pattern from "../assets/Images/pattern.png"
import vector from "../assets/Images/Vector.png"
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import clientsImg from "../assets/Images/Pagination.png"
import InfoGrid from '../components/InfoGrid';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import VideoSection from '../components/VideoSection';
import Blogs from '../components/Blogs';
import ReviewSlider from '../components/ReviewSlider';
import Faq from '../components/Faq';
import MobileSection from '../components/MobileSection';
import { Numbers } from '../assets/Data/NumbersData';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

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
            {/* section 1 */}

            <section className="bg-section1 w-full h-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[81px] flex flex-col lg:flex-row">
                    {/* Left Content */}
                    <div className="lg:w-1/2 w-full">
                        <div className="flex items-center gap-2 relative">
                            <span>
                                <img src={rating} alt="rating" width={210} height={20} />
                                <p className="absolute top-0 left-[27px] lg:left-[27px] font-semibold text-[14px]">
                                    Google Rating
                                </p>
                            </span>
                        </div>
                        <h2 className="font-medium text-[47.85px] leading-[60px] mt-8 lg:text-[36px] lg:leading-[48px] text-center sm:text-left">
                            Your trusted partner <br /> for compliance business needs
                        </h2>
                        <div className="w-[40px] h-[1px] bg-[#F60014] mt-3 mx-auto lg:mx-0" />
                        <p className="mt-[26px] font-normal text-[20px] lg:text-[16px] w-full lg:w-[660px] text-[#4F4F4F] leading-[28.8px] text-center sm:text-left">
                            An online business compliance platform that helps entrepreneurs and other individuals with various,
                            <b> registrations, tax filings,</b> and other <b>legal matters.</b>
                        </p>
                        <img src={trust} alt="banner" loading="lazy" className="mt-[35px] max-w-full" />

                        <div className="flex flex-col sm:flex-row gap-6 mt-[24px] items-center sm:items-start">
                            <Btn
                                text={"Talk An Expert"}
                                classname={
                                    "bg-[#1C4670] w-full sm:w-[204px] h-[54px] rounded-md text-white font-bold hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"
                                }
                            />
                            <span className="flex items-center gap-2 lg:mt-4 sm:mt-0">
                                <FaCirclePlay size={24} className="text-[#FB432C]" />
                                <p className="text-[16px] font-semibold cursor-pointer">See How it works</p>
                            </span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex justify-center lg:w-1/2 w-full mt-20 lg:mt-0 relative">
                        <img src={banner} alt="banner" loading="lazy" className="w-full max-w-[600px] h-auto" />

                        <div className="flex flex-col gap-10 absolute left-[173px] top-[-3.8rem] lg:left-[473px] lg:top-[-30px] sm:left-[90px] sm:top-[-10px]">
                            {
                                title.map((para, i) => (
                                    <p
                                        key={i}
                                        className="bg-[#FFFFFF] w-[177px] h-[52px] flex items-center font-medium text-[14px] rounded-md shadow-md shadow-[#00000026] justify-center"
                                    >
                                        {para.heading}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}

            <section className="w-full h-auto py-12 px-4 sm:px-6 lg:px-8">

                <div className="mt-2 flex flex-col justify-center gap-y-10 items-center">
                    <p className="text-[22px] font-bold text-center sm:text-[18px] sm:px-4">
                        Trusted By Over 100+ Startups and freelance businesses
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-28">
                        {
                            logos.map((icon, i) => (
                                <img
                                    key={i}
                                    src={icon.logo}
                                    alt="icon"
                                    loading="lazy"
                                    className="w-[137px] h-auto sm:w-[120px]"
                                />
                            ))
                        }
                    </div>
                </div>

            </section>

            {/* section 3 */}
            <Explore />

            {/* Section 4 */}

            <section className="w-full py-12" id="about">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex justify-between flex-col-reverse lg:flex-row">

                        <div className="flex flex-col">
                            <p className="uppercase text-[#EB8D15] text-[14px] font-normal">
                                Welcome to registerkaro.in
                            </p>
                            <h2 className="font-bold text-[32px] leading-[40px] mt-6 sm:text-[28px] sm:leading-[36px]">
                                About <span className="text-[#EB8D15]">Register Karo</span>
                            </h2>
                            <div className="w-full sm:w-[644px] flex flex-col gap-y-6">
                                <p>
                                    We have been using Intelegencia as our DevOps vendor for our field
                                    service applications over the last couple of years and I’m extremely
                                    pleased with their performance, ability to execute, and willingness
                                    to adapt in our ever changing environment. Perry is an outstanding
                                    leader who is fanatical about customer satisfaction. He has built a
                                    solid team which has consistently delivered on projects thereby
                                    exceeding everyone’s expectations.
                                </p>
                                <p>
                                    I would strongly recommend their services to any organization that
                                    is looking for solid, reliable, and predictable outcomes.
                                </p>
                            </div>

                            <Btn
                                text={"Learn More"}
                                classname={
                                    "bg-[#1C4670] w-[157px] flex items-center gap-2 justify-center h-[48px] mt-7 rounded-md text-white hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"
                                }
                                icon={<FaRegArrowAltCircleRight />}
                            />
                        </div>

                        <div className="relative flex justify-center lg:mt-0 mt-2  lg:justify-end">
                            <img src={memberImg} alt="img" width={510} className="lg:w-[510px] z-20 sm:w-[400px] w-full" />
                            <img
                                src={pattern}
                                alt="pattern"
                                className="absolute top-[176px] z-0 right-0 lg:top-[240px] sm:right-[-50px] lg:right-[-60px]"
                                loading="lazy"
                            />
                            <img
                                src={vector}
                                alt="img"
                                className="absolute top-[-200px] right-0 sm:right-[-60px] lg:top-[-60px] lg:right-[-85px]"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* section 5 */}
            <InfoGrid />

            {/* section 6 */}
            <VideoSection />

            {/* section 7 */}
            <section className="w-full py-11">
                <div className="flex flex-col items-center">

                    <div className="text-center mb-10 px-4">
                        <div className="space-y-4 max-w-4xl mx-auto">
                            <h1 className="text-[24px] sm:text-[32px] font-bold">
                                Our Happy Clients
                            </h1>
                            <p className="text-[#666666] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px]">
                                Professionally cultivate one-to-one customer service with robust ideas.
                                Dynamically innovate resource-leveling customer service for state of the art customer service.
                            </p>
                        </div>
                    </div>


                    <div className="w-full px-4 sm:px-8 lg:px-0">
                        <img
                            src={clientsImg}
                            alt="Our Happy Clients"
                            loading="lazy"
                            className="w-full max-w-7xl mx-auto object-cover"
                        />
                    </div>


                    <div className="mt-6">
                        <Btn
                            text={"Show more"}
                            icon={<FaLongArrowAltRight />}
                            classname={
                                "flex items-center font-semibold gap-3 justify-center text-[#1C4670]"
                            }
                        />
                    </div>
                </div>
            </section>


            <div className="w-full py-11 bg-[#FFA229]">
                <div className="flex flex-wrap gap-6 lg:gap-x-10 items-center justify-center">

                    <div className="flex items-center gap-5 flex-col lg:flex-row text-center lg:text-left">
                        <div className="w-[50px] h-[50px] bg-[#EB5757] rounded-full flex items-center justify-center text-white">
                            <FaWpforms size={20} />
                        </div>
                        <p className="text-[16px] sm:text-[18px] font-semibold">
                            Fill up Application Form
                        </p>
                    </div>


                    <div className="flex items-center gap-5 flex-col lg:flex-row text-center lg:text-left">
                        <div className="w-[50px] h-[50px] bg-[#27AE60] rounded-full flex items-center justify-center text-white">
                            <MdOutlinePayments size={20} />
                        </div>
                        <p className="text-[16px] sm:text-[18px] font-semibold">
                            Make Online Payment
                        </p>
                    </div>


                    <div className="flex items-center gap-5 flex-col lg:flex-row text-center lg:text-left">
                        <div className="w-[50px] h-[50px] bg-[#F2994A] rounded-full flex items-center justify-center text-white">
                            <RiCustomerService2Fill size={20} />
                        </div>
                        <p className="text-[16px] sm:text-[18px] font-semibold">
                            Executive will Process Application
                        </p>
                    </div>


                    <div className="flex items-center gap-5 flex-col lg:flex-row text-center lg:text-left">
                        <div className="w-[50px] h-[50px] bg-[#828282] rounded-full flex items-center justify-center text-white">
                            <IoMdMailUnread size={20} />
                        </div>
                        <p className="text-[16px] sm:text-[18px] font-semibold">
                            Get Confirm Mail
                        </p>
                    </div>
                </div>
            </div>


            {/* Section 8 */}
            <Blogs />

            {/* Slider Section */}
            <ReviewSlider />

            {/* Faq Section */}
            <Faq />

            {/* Mobile Section  */}
            <MobileSection />

            {/* Number Section */}
            <section className="w-full py-11 z-10 bg-white relative">
                <div className="flex flex-col items-center justify-center px-4">
                    {/* Section Heading */}
                    <p className="uppercase text-[12px] md:text-[14px] text-[#EB8D15] text-center">
                        Why Register Karo
                    </p>
                    <h1 className="font-bold text-[24px] md:text-[32px] text-center leading-snug">
                        Some Numbers Are Important
                    </h1>

                    {/* Numbers Section */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6 mt-10 justify-center">
                        {Numbers.map((num, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <p
                                    className="text-[28px] md:text-[42px] font-extrabold"
                                    style={{
                                        background: "linear-gradient(180deg, #FFA229 0%, #1C4670 78.12%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        display: "inline-block",
                                    }}
                                >
                                    {num.number}
                                </p>
                                <p className="uppercase font-bold text-[12px] md:text-[16px] text-center">
                                    {num.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Form Section */}
            <FormSection />

            {/* Section */}
            <section className="w-full py-11">
                <div className="flex flex-wrap gap-y-4 gap-x-24 items-center justify-center mt-4">
                    <span className="text-[#0052FF] text-lg md:text-2xl font-semibold">
                        coinbase
                    </span>
                    <span className="flex items-center gap-x-1 font-semibold text-lg md:text-2xl text-[#1ED760]">
                        <FaSpotify size={30} className="md:size-[37px]" color="green" /> Spotify
                    </span>
                    <span className="flex items-center gap-x-1 font-semibold text-lg md:text-2xl">
                        <FaSlack size={30} className="md:size-[37px]" /> slack
                    </span>
                    <span className="flex items-center gap-x-1 font-semibold text-lg md:text-2xl">
                        <FaDropbox size={30} className="md:size-[37px]" color="blue" /> Dropbox
                    </span>
                    <span className="text-[#0052FF] text-lg md:text-2xl font-semibold">
                        webflow
                    </span>
                    <span className="text-[#2D8CFF] text-lg md:text-2xl font-semibold">
                        zoom
                    </span>
                </div>
            </section>


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
