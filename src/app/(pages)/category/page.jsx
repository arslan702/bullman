"use client";
import React from "react";
import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { FaAngleDown, FaAngleUp, FaWeightHanging } from "react-icons/fa";
import Image from "next/image";
import img from "../../../../Images/29.webp";
import img1 from "../../../../Images/30.webp";
import img2 from "../../../../Images/31.webp";
import img3 from "../../../../Images/32.webp";


export default function category() {
  const [leftWeight, setLeftWeight] = useState(0); // State for the weight on the left side
  const totalWeight = 95; // Total weight range, assuming 0kg - 95kg
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(12); // Default selected page size
  const [isSelectedItemOpen, setIsSelectedItemOpen] = useState(true); // Submenu open by default

  const toggleSelectedItem = () => {
    setIsSelectedItemOpen(!isSelectedItemOpen);
  };

  const closeSelectedItem = () => {
    setIsSelectedItem(false);
  };

  const handlePageSizeClick = (size) => {
    setSelectedPageSize(size);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  const handleLeftClick = () => {
    if (leftWeight > 0) {
      setLeftWeight(0); // Move the right icon to the left side
    }
  };

  const handleRightClick = () => {
    if (leftWeight < totalWeight) {
      setLeftWeight(totalWeight); // Move the left icon to the right side
    }
  };

  return (
    <div className="md:px-20 pt-3 py-3 mb-5  ">
      <span className="flex font-normal text-[12px] space-x-2 cursor-pointer px-4 ">
        <p>Welcome</p>
        <MdArrowRightAlt className="mt-1" />
        <p> CROSS TRAINING </p>
        <MdArrowRightAlt className="mt-1" />
        <p>Rigs & Racks</p>
      </span>
      <br />
      <div className="md:flex  ">
        {/* left side of weight */}
        <div className="  md:w-[25%] w-full pt-2 px-4 ">
          <div className="flex justify-between md:max-w-56 w-full border-b-2 border-black pb-2  ">
            <p className="font-[600] ">WEIGHT</p>
            <FaAngleDown className="mt-1" />
          </div>
          <br />

          <div className="flex flex-col justify-between">
            <p className="font-[400] text-[12px] ">0kg - 95kg</p>
            <div className="border-2 border-black md:max-w-56 w-full mt-5 relative">
              <FaWeightHanging
                className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer"
                onClick={handleRightClick} // Handle click to move the left icon to the right side
                style={{ left: `${(leftWeight / totalWeight) * 100}%` }}
              />
              <FaWeightHanging
                className="absolute right-0 top-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer"
                onClick={handleLeftClick} // Handle click to move the right icon to the left side
                style={{ left: `${100 - (leftWeight / totalWeight) * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max="95"
                value={leftWeight}
                onChange={(event) =>
                  setLeftWeight(parseInt(event.target.value))
                } // Update leftWeight on slider change
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* right side for products */}
        <div className="  md:w-[75%] w-full p-3 ">
          <div className="md:flex gap-5  ">
            <div className="relative md:mt-0 mt-2 ">
              <div
                className="h-10 md:w-[170px] w-full border-[1px] bg-white flex gap-3 px-3 py-2 cursor-pointer "
                onClick={toggleSubMenu}
              >
                <p className="text-[13px] ">Sort by: Relevance</p>
                <FaAngleDown
                  className={`mt-1 ${isSubMenuOpen ? "hidden" : ""}`}
                />
                <FaAngleUp
                  className={`mt-1 ${isSubMenuOpen ? "" : "hidden"}`}
                  onClick={closeSubMenu}
                />
              </div>
              {isSubMenuOpen && (
                <div className="absolute top-full left-0 bg-[#F8F8F8] border border-gray-200 shadow-xl  w-[220px] ">
                  {/* Submenu items */}
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Sales, descending oder{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Relevance{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Name, A to Z{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Name, Z to A{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Ascending Price{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Price, decreasing{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Reference, A to Z{" "}
                    </p>
                  </a>
                  <a href="">
                    {" "}
                    <p className="cursor-pointer w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 ">
                      Reference, Z to A{" "}
                    </p>
                  </a>
                </div>
              )}
            </div>
            <div className="relative md:mt-0 mt-2">
              <div
                className="h-10 md:w-[150px] w-full border-[1px] flex bg-white gap-3 cursor-pointer p-2"
                onClick={toggleSelectedItem}
              >
                <p className="text-[13px] px-3 ">
                  Per page: {selectedPageSize}{" "}
                </p>
                <FaAngleDown
                  className={`mt-1 ${isSelectedItemOpen ? "hidden" : ""}`}
                />
                <FaAngleUp
                  className={`mt-1 ${isSelectedItemOpen ? "" : "hidden"}`}
                  onClick={closeSelectedItem}
                />
              </div>
              {isSelectedItemOpen && (
                <div className="absolute top-full left-0 bg-[#F8F8F8] border border-gray-200  w-[190px] shadow-xl text-[14px] gap-5 ">
                  {/* Submenu items */}
                  <p
                    className={`cursor-pointer ${
                      selectedPageSize === 20
                        ? "font-bold"
                        : " w-full hover:bg-black hover:text-white text-[14px] px-4 py-3 "
                    }`}
                    onClick={() => handlePageSizeClick(20)}
                  >
                    20
                  </p>
                  <br />
                  <p
                    className={`cursor-pointer ${
                      selectedPageSize === 28
                        ? "font-bold"
                        : "w-full hover:bg-black hover:text-white text-[14px] px-4 py-3"
                    }`}
                    onClick={() => handlePageSizeClick(28)}
                  >
                    28
                  </p>
                  <br />
                  <p
                    className={`cursor-pointer ${
                      selectedPageSize === 36
                        ? "font-bold"
                        : "w-full hover:bg-black hover:text-white text-[14px] px-4 py-3"
                    }`}
                    onClick={() => handlePageSizeClick(36)}
                  >
                    36
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Images  */}
          <br />
          <div className="grid md:grid-cols-4 grid-cols-2 mt-3 gap-3 cursor-pointer ">
            <div className=" ">
              <Image src={img} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2 " >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img1} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2 " >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img2} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium  pt-2" >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img3} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2" >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2 " >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img2} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2 " >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img3} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium  pt-2" >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>
            <div className=" ">
              <Image src={img} className=" flex justify-center flex-col items-center " />
              <p className="text-[12px] font-medium pt-2" >COMPETITION BUMPERS - IWF standard (pair)</p>
              <p className="text-[14px] font-semibold " >€116.67</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
