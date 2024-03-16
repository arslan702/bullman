"use client";
import React, { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import img1 from "../../../../Images/29.webp";
import img2 from "../../../../Images/30.webp";
import img3 from "../../../../Images/31.webp";
import img4 from "../../../../Images/32.webp";
import img5 from "../../../../Images/33.webp";
import img6 from "../../../../Images/pay.webp";
import img7 from "../../../../Images/sat.webp";
import img8 from "../../../../Images/SHIPPING.webp";
import img9 from "../../../../Images/plate1.webp";
import img10 from "../../../../Images/plates.webp";
import Most from "@/Components/Mostview";
import Seller from "@/Components/Bestseller";

export default function Description() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(img1);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const togglePopup = (image) => {
    setSelectedImage(image);
    setShowPopup(!showPopup);
  };

  const handleImageClick = () => {
    togglePopup(selectedImage);
    window.location.href =
      "https://bullmanequipment.com/fr/shop/69-96-plaques-en-caoutchouc-tri-grip-paire-3760849753518.html#/32-poids-5_kg_paire";
  };

  return (
    <div className="md:px-16 px-4 pt-3 py-3 mb-5 bg-[#FFFFFF] ">
      {/* Thumbnails */}
      <div className="flex font-normal text-[12px] space-x-2 cursor-pointer px-4 ">
        <p>Welcome</p>
        <MdArrowRightAlt className="mt-1" />
        <p> CROSS TRAINING </p>
        <MdArrowRightAlt className="mt-1" />
        <p>Rigs & Racks</p>
      </div>
      <br />
      <div className="md:flex  ">
        {/* product images  */}
        <div className="flex md:w-[60%] ">
          <div className="flex flex-col ">
            <div className="flex">
              <div className="flex flex-col cursor-pointer  ">
                {/* Thumbnails */}
                {[img1, img2, img3, img4, img5].map((image, index) => (
                  <Image
                    key={index}
                    className="thumbnail"
                    src={image}
                    onClick={() => togglePopup(image)}
                    width={100}
                    height={100}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex items-start justify-center cursor-pointer ">
                <Image
                  src={selectedImage}
                  alt="selected"
                  className="max-w-4/5 h-auto"
                />
              </div>
            </div>
            {/* description details  */}
            <div className="flex justify-between ">
              <button
                className={`w-full md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 1 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(1)}
              >
                DESCRIPTION
              </button>
              <button
                className={`w-full  md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 2 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(2)}
              >
                GURANTEE
              </button>
              <button
                className={`w-full  md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 3 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(3)}
              >
                Shipping
              </button>
              <button
                className={`w-full  md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 4 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(4)}
              >
                Secure Payment
              </button>
            </div>
            <br />
            {/* description  Tab explanation */}
            <div>
              {activeTab === 1 && (
                <div className="px-2  ">
                  <p className="text-[14px] font-[500] ">
                    Our Tri Grip disc is a weight training disc used in most
                    strength or muscular endurance training.
                  </p>
                  <p className="mt-1 text-[14px] font-[500] ">
                    It stands out for its unique shape with three ergonomic
                    handles for easier and safer handling allowing easier and
                    safer handling of the disc, providing a better grip when
                    loading or unloading the bar.{" "}
                  </p>
                  <div className="md:flex overflow-hidden gap-3 mt-2 ">
                    <div className="w-[350px] ">
                      <Image src={img10} className="h-[300px] w-[400px] " />
                      <u className="font-[600] ">1-EASY HANDLING</u>
                      <p className="text-[14px] leading-7 ">
                        The 3 integrated ergonomic handles allow easy handling
                        when changing weight, reducing transition time between
                        exercises and reducing the risk of injury.
                      </p>
                    </div>
                    <div className="w-[350px] ">
                      <Image src={img9} className="h-[300px] w-[400px] " />
                      <u className="font-[600] ">2-PROTECTIVE COATING</u>
                      <p className="text-[14px] leading-7 ">
                        These discs are covered with a quality rubber coating,
                        protecting floors and equipment from impacts and
                        scratches while reducing noise during training.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="px-2 ">
                  <p>
                    <b>LIFETIME WARRANTY</b>{" "}
                  </p>
                  <br />
                  <p className="font-[400] ">
                    All our accessories and small equipment are guaranteed for 2
                    years. <br />
                    Our bars, flat machines and racks are guaranteed for 5
                    years.
                  </p>
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <p>
                    <b>SHIPPING</b>
                  </p>
                  <br />
                  <p className=" font-[600] ">
                    For any order over €500.00 we offer free shipping costs.
                  </p>
                  <br />
                  <p className="text-[14px] font-[500]  ">
                    With the exception of slabs, racks, certain bars and
                    machines which are subject to a fixed price. Transport known
                    as “BULLMAN HOME” is at the choice of Bullman Equipment.{" "}
                    <br />
                    When products are in stock, we generally ship within 48
                    hours. <br />
                    The contribution to shipping costs is calculated based on
                    the price of the basket, the weight and the selected
                    carrier.
                  </p>
                </div>
              )}
              {activeTab === 4 && (
                <div className="px-2 ">
                  <p className="font-[500] ">SECURE PAYMENT</p>
                  <br />
                  <p className="text-[14px] font-[500] ">
                    We offer secure, SSL encrypted payment.
                  </p>{" "}
                  <br />
                  <p className="font-[600]">
                    Cash : <br /> -Bank cards, <br /> -Instant transfer, <br />{" "}
                    -Apple Pay.{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* product details */}
        <div className="md:w-[40%]  h-auto py-4  p-4 md:px-12 px-2 ">
          <p className="text-[22px] font-[600] max-w-96 pt-2 ">
            {" "}
            OLYMPIC DISCS FROM 1.25 TO 25 KG (PAIR){" "}
          </p>
          <i className="text-[12px] ">Shipped within 48 hours</i>

          {/* Weight details */}
          <div>
            <div className="flex justify-between mt-4 ">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 1.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€8.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 3.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€15.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 3.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€18.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer">
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  -
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px]">
                  0
                </p>
                <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px]">
                  +
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="border-[1px] border-[#9A9A9A] "> </div>
          <br />
          <div className=" text-white cursor-pointer text-center py-2 bg-[#315593] hover:bg-gradient-to-b from-blue-700 to-blue-900 ">
            {" "}
            <button>ADD TO CART</button>{" "}
          </div>
          <br />
          {/* product specifications */}
          <div className="md:flex flex md:flex-row flex-col justify-center items-center  gap-5 ">
            <div className="md:flex flex md:flex-row flex-col justify-center items-center gap-2  ">
              <Image src={img8} className="h-[25px] w-[30px] " />
              <p className="text-[9px] mt-1 ">Shipping</p>
            </div>
            <div className="md:flex gap-2 flex md:flex-row flex-col justify-center items-center">
              <Image src={img7} className="h-[25px] w-[30px] " />
              <p className="text-[9px] mt-1 ">SATISFIED OR REFUNDED</p>
            </div>
            <div className="md:flex gap-2 flex md:flex-row flex-col justify-center items-center ">
              <Image src={img6} className="h-[25px] w-[20px] " />
              <p className="text-[9px] mt-1 ">SECURE PAYMENT</p>
            </div>
          </div>
          <br />
          <div>
            <p className="text-[16px] font-medium border-b border-gray-300 pb-3 ">
              SPECIFICATIONS
            </p>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%]   ">Brand</p>
              <p> BULLMAN</p>
            </div>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%]  ">Color </p>
              <p> Black</p>
            </div>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%]  ">Weight </p>
              <p> 1.25-25kg</p>
            </div>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%]  ">Diameter </p>
              <p> 50.4mm</p>
            </div>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%] ">Type of plates </p>
              <p> Ergonomic (non-droppable)</p>
            </div>
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className=" w-[30%]  ">Guarantee </p>
              <p> 5 years</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="max-w-[80%] max-h-[80%] bg-white p-4 rounded-lg">
            <span
              className="absolute top-2 right-5 cursor-pointer text-white md:text-[60px] text-[40px] "
              onClick={() => togglePopup(selectedImage)}
            >
              &times;
            </span>
            <Image src={selectedImage} alt="popup" className="w-full h-auto" />
          </div>
        </div>
      )}
      <Most />

      <Seller />
    </div>
  );
}
