"use client";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { CiLock } from "react-icons/ci";
import Image from "next/image";
import img from "../../../Images/logo.webp";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const handleSubMenuMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuOpen(false);
  };
  return (
    <div className="pt-4 bg-black shadow-2xl  ">
      <div className="md:flex  justify-between cursor-pointer md:pl-16 md:pr-20 px-4 ">
        <div className="pl-2 mt-1 md:gap-2 ">
          <p>
            <a href="/" className="text-[35px] -tracking-tighter">
              <Image src={img} className="h-[42px] w-[200px] md:pl-0 pl-5 " />
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
            xmlns="http:www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <IoSearch className="text-[22px] text-white" />
          </svg>
        </div>
        <div className="md:flex  space-x-5  text-white md:mt-0 mt-2 ">
          <div className="text-[12px] md:block hidden ">
            <p className="bg-[#315593] px-2 py-1">FREE DELIVERY FROM 500€ </p>
            <p className="text-[#315593]">OUR SHIPPING COSTS : HERE</p>{" "}
          </div>
          <div className=" text-[18px] font-light flex justify-around md:space-x-6 space-x-5 mt-4 pb-3 text-white">
            {toggle ? (
              <IoMdClose
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl cursor-pointer md:hidden block transition-all duration-100 "
              />
            ) : (
              <CiMenuFries
                onClick={() => setToggle(!toggle)}
                className="text-white text-2xl cursor-pointer md:hidden block transition-all duration-100"
              />
            )}

            <CiLock />
            <FaRegUser />
            <RiShoppingCartLine />
          </div>
        </div>
      </div>
      {/* 2nd menu bar */}
      <div className="max-w-[1240px] mt-2 mx-auto text-white  px-4  ">
        <div className="md:flex hidden gap-12 ">
          <ul className="flex  gap-9 items-center cursor-pointer text-[14px] font-[700]">
            {/* <button className="bg-[#325897] h-12 px-5 py-3 hover:bg-white hover:text-black flex items-center justify-center font-bold " >SHOP</button> */}

            <div className="relative">
              <button
                className="bg-[#325897] h-12 px-5 py-3 flex items-center justify-center font-bold"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                SHOP
              </button>
              {isSubMenuOpen && (
                <div
                  className="absolute top-full left-0 bg-white text-black font-medium w-52 border border-gray-200 shadow-md  "
                  onMouseEnter={handleSubMenuMouseEnter}
                  onMouseLeave={handleSubMenuMouseLeave}
                >
                  {/* Your submenu content here */}
                  <ul>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      BARS
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      DISCS
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      MACHINES & ERGOS
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      FLOOR COVERINGS
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      ACCESORIES
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      BENCHES
                    </li>
                    <li className="leading-[20px] text-[12px] hover:bg-[#325897] hover:text-white py-3 px-4">
                      GIFT CARDS
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <li className="hover:text-[#2A4A80] ">STRENGTH & DUMBBELL</li>
            <li className="hover:text-[#2A4A80] ">A PHYSICAL TRAINING </li>
            <li className="hover:text-[#2A4A80] ">GYMNASTIC</li>
            <li className="hover:text-[#2A4A80] ">RIGS & RACKS</li>
            <li className="hover:text-[#2A4A80] ">DISCS</li>
            <li className="hover:text-[#2A4A80] ">BARS</li>
            <li className="hover:text-[#2A4A80] ">MACHINES & ERGOS </li>
          </ul>
          <button className="bg-[#325897] h-12 font-bold text-[13px] px-3 py-3 flex items-center justify-center ">
            PACKAGES
          </button>
        </div>
        {/* responsive  */}
        <ul
          className={`cursor-pointer fixed bg-white text-black top-[195px] md:hidden w-[80%] mx-10 z-50 h-screen overflow-y-auto transition-all duration-1000 ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            STRENGTH & DUMBBELL
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            A PHYSICAL TRAINING
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            GYMNASTIC
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            RIGS & RACKS
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            DISCS
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            BARS
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            MACHINES & ERGOS
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            BENCHES
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            ACCESORIES
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            GIFT CARDS
          </li>
          <li className="leading-[20px] text-[12px] hover:bg-[#55595C] hover:text-white py-3 px-4">
            DUMBLES
          </li>
        </ul>
      </div>
    </div>
  );
}


