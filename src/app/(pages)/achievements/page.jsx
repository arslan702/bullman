import Image from "next/image";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import img from "../../../../Images/certif/1.webp";
import img1 from "../../../../Images/certif/2.webp";
import img2 from "../../../../Images/certif/3.webp";
import img3 from "../../../../Images/certif/4.webp";
import img4 from "../../../../Images/certif/5.webp";
import img5 from "../../../../Images/certif/6.webp";
import img6 from "../../../../Images/certif/7.webp";
import img7 from "../../../../Images/certif/8.webp";
import Most from "@/Components/Mostview";
import Seller from "@/Components/Bestseller";

export default function Achievements() {
  return (
    <div className="md:px-20 mb-5 px-4 ">
      <div className="flex font-normal md:text-[12px] text-[11px] space-x-2 cursor-pointer pt-4   ">
        <p>Welcome</p>
        <MdArrowRightAlt className="mt-1" />
        <p> OUR ACHIEVEMENTS </p>
      </div>
      <br />
      <p className="text-[20px] font-[500] tracking-wider ">OUR ACHIEVEMENTS</p>
      <div className=" md:w-[67%] w-full mt-14 mx-auto  ">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-y-8 gap-x-5 cursor-pointer  ">
          <Image
            src={img}
            className="rounded-[15px] h-[160px] w-[170px]  shadow-2xl "
          />
          <Image
            src={img1}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img2}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img3}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img4}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img5}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img6}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
          <Image
            src={img7}
            className="rounded-[15px] h-[160px] w-[170px] shadow-2xl "
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <Most/>
      <br />
      <Seller/>
      <br />
      <br />
    </div>
  );
}

