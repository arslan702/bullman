import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import Image from 'next/image';
import img from '../../../Images/logo.webp'

export default function Navbar() {
  return (
    <div className='py-4 bg-black shadow-2xl  ' >
 <div className="md:flex  justify-between cursor-pointer md:pl-16 md:pr-20 px-4 ">
        <div className="pl-2 mt-1 gap-2 ">
          <p>
            <a href="/" className="text-[35px] -tracking-tighter">
<Image src={img} className='h-[42px] w-[200px] ' />
            </a>
          </p>
        </div>
        <div className="relative flex items-center md:mt-0 mt-1 ">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pr-10 md:w-[400px] text-white w-[100%] bg-black flex flex-1 border border-[#636363] rounded-[20px] focus:outline-none"
          />
          <svg
            className="absolute right-2 h-[33px] w-[42px] text-gray-400 bg-black p-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <IoSearch className="text-[22px] text-white" />
          </svg>
        </div>
        <div className="md:flex  space-x-5  text-white md:mt-0 mt-2 ">
         <div className='text-[12px] md:block hidden ' >
          <p className='bg-[#315593] px-2 py-1' >FREE DELIVERY FROM 500€ </p>
          <p className='text-[#315593]' >OUR SHIPPING COSTS : HERE</p> </div> 
          <div className=' text-[18px] font-light flex justify-around md:space-x-6 space-x-5 mt-4 text-white' >
          <FaRegUser />
          <RiShoppingCartLine />
          <CiLock />
          </div>
        </div>
      </div>
    </div>
  )
}
