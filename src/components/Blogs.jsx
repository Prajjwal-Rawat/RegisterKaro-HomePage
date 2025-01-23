import React from 'react'
import { Blogdata } from '../assets/Data/BlogsData'
import { Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";
import Btn from './Btn';
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  return (
    <section className='w-full py-11' id='blog'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col gap-y-3 items-center'>
          <p className='text-[14px] text-[#EB8D15]'>Explore Our Blogs</p>
          <h2 className='text-[32px] font-bold text-[#3C2109]'>Accelerate Digital Transformation</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {Blogdata.map((blog, i) => (
            <div key={i} className='bg-white shadow-lg rounded-lg p-5 gap-y-2 flex flex-col'>
              <img 
                src={blog.Img} 
                alt="img" 
                loading="lazy" 
                className='w-full h-48 object-cover rounded-t-md mb-4' 
              />
              <p className='text-gray-500 text-sm'>{blog.time}</p>
              <Link 
                to={blog.link} 
                className='text-lg font-semibold text-blue-600 hover:underline flex items-center justify-between'>
                {blog.title}
                <FiExternalLink />
              </Link>
              <p className='text-[#667085] text-[15px] mt-2'>{blog.desc}</p>
              <div className='flex gap-2 mt-4'>
                <span className='bg-[#F9F5FF] text-gray-600 text-sm px-3 py-1 rounded-md'>{blog.word1}</span>
                <span className='bg-[#EEF4FF] text-[#3538CD] text-sm px-3 py-1 rounded-md'>{blog.word2}</span>
                {
                    blog.word3 && (
                        <span className='bg-[#FFF6ED] text-[#C4320A] text-sm px-3 py-1 rounded-md'>{blog.word3}</span>
                    )
                }
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center mt-12'>
        <Btn
        text={"Show more blogs"}
        icon={<FaArrowRightLong />}
        classname={"bg-[#1C4670] w-[204px] h-[54px] rounded-md text-white font-semibold flex items-center justify-center gap-x-3 hover:scale-105 active:scale-100 shadow-lg active:shadow-none transition-all duration-300 shadow-[#A8164B26] text-[16px]"}
        />
        </div>
      </div>
    </section>
  )
}

export default Blogs
