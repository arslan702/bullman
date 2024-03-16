import React from "react";
import img from "../../../Images/footer/1.webp";
import img1 from "../../../Images/footer/2.webp";
import img2 from "../../../Images/footer/3.webp";
import img3 from "../../../Images/footer/4.webp";
import img4 from "../../../Images/footer/5.webp";
import img5 from "../../../Images/footer/6.webp";
import img6 from "../../../Images/footer/7.webp";
import img7 from "../../../Images/footer/8.webp";
import img8 from "../../../Images/footer/9.webp";
import img9 from "../../../Images/footer/10.webp";
import img10 from "../../../Images/footer/11.webp";
import img11 from "../../../Images/footer/12.webp";
import img12 from "../../../Images/footer/13.webp";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLinkNext } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";

export default function Footer() {
  return (
    <div className="md:px-16 px-4  bg-black  py-5 ">
      <div className="flex md:flex-row flex-col justify-center items-center  gap-3 text-white ">
        <div className="flex md:flex-row flex-col items-center  gap-4  ">
          <div>
            <Image src={img} className="h-[45px] w-[45px] " />
          </div>
          <div className="space-y-1">
            <p className="text-[12px] ">SATISFAIT OU REMBOURSÉ</p>
            <p className="text-[#7a7a7a] text-[11px]  ">
              Satisfait ou Remboursé
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4  ">
          <div className="space-y-1">
            <Image src={img1} className="h-[45px] w-[45px] " />
          </div>
          <div>
            <p className="text-[12px] ">DESIGNÉ EN FRANCE</p>
            <p className="text-[#7a7a7a] text-[11px] ">DESIGNÉ EN FRANCE</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4  ">
          <div className="space-y-1">
            <Image src={img2} className="h-[45px] w-[45px] " />
          </div>
          <div>
            <p className="text-[12px] ">SPÉCIALISTES À VOTRE ÉCOUTE</p>
            <p className="text-[#7a7a7a] text-[11px] ">
              SPÉCIALISTES À VOTRE ÉCOUTE
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4  ">
          <div>
            <Image src={img3} className="h-[45px] w-[45px] " />
          </div>
          <div className="space-y-1">
            <p className="text-[12px] ">PRODUITS TESTÉS</p>
            <p className="text-[#7a7a7a] text-[11px] ">PRODUITS TESTÉS</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4  ">
          <div>
            <Image src={img4} className="h-[45px] w-[45px] " />
          </div>
          <div className="space-y-1">
            <p className="text-[12px] ">RETRAIT SUR PLACE</p>
            <p className="text-[#7a7a7a] text-[11px] ">RETRAIT SUR PLACE</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-4  ">
          <div>
            <Image src={img5} className="h-[45px] w-[45px] " />
          </div>
          <div className="space-y-1">
            <p className="text-[12px] ">LIVRAISON EN POINTS RELAIS</p>
            <p className="text-[#7a7a7a] text-[11px] ">
              LIVRAISON EN POINTS RELAIS
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="md:flex md:mt-2  ">
        <div className=" md:w-[55%] w-[100%] ">
          <div className="grid md:grid-cols-3 grid-cols-1 text-[white]  ">
            <div className="flex flex-col mt-2 ">
              <p className="text-[18px] font-[600] mb-1 ">My Account </p>
              <a
                href="/"
                className="text-[14px] pt-3 font-[300] hover:text-[#7a7a7a] cursor-pointer "
              >
                Contact us
              </a>
              <a
                href="/"
                className="text-[14px] pt-3 font-[300] hover:text-[#7a7a7a] cursor-pointer "
              >
                Login
              </a>
              <a
                href="/"
                className="text-[14px] pt-3 font-[300] hover:text-[#7a7a7a] cursor-pointer "
              >
                My account
              </a>
              <a
                href="/"
                className="text-[14px] pt-3 font-[300] hover:text-[#7a7a7a] cursor-pointer "
              >
                Order Tracking
              </a>

              <div className="flex flex-col mt-4 ">
                <p className="text-[18px] font-[600] mb-1 ">SPECIAL OFFERS </p>
                <a
                  href="/"
                  className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
                >
                  Prices drop
                </a>
                <a
                  href="/"
                  className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
                >
                  New products
                </a>
                <a
                  href="/"
                  className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
                >
                  Best sales
                </a>
              </div>
            </div>
            <div className="flex flex-col mt-2 ">
              <p className="text-[18px] font-[600] mb-1 text-white ">
                CUSTOMER SERVICE{" "}
              </p>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Deliveries and returns
              </a>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Legal Notice
              </a>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Secure payment
              </a>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                CGV & CGU
              </a>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Shipping fees
              </a>
              <a
                href="/"
                className="text-[14px] font-[300] pt-3 hover:text-[#7a7a7a] cursor-pointer "
              >
                Stores
              </a>
            </div>
            <div className="flex flex-col mt-2 ">
              <p className="text-[18px] font-[600] mb-1 ">Contact details </p>
              <a
  href="mailto:team@bullmanequipment.com"
  className="text-[14px] font-[300] pt-3 cursor-pointer flex gap-2"
>
  <MdEmail className="mt-1" />
  team@bullmanequipment.com
</a>

              <a
                href="https://wa.me/+33187664530"
                target="_blank"
                className="text-[14px] font-[300] pt-3  cursor-pointer flex gap-2"
              >
                <FaWhatsapp className="mt-1" />
                bullman.team
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className=" h-52 md:w-[40%] w-[100%] md:mt-8 md:px-10 pt-2 text-white ">
          <p className="font-[600] ">STAY UPTO DATE</p>

          <div className="relative flex items-center md:mt-3 mt-1 text-white ">
            <input
              type="text"
              placeholder="Email..."
              className="px-4 py-2 pr-10 md:w-[80%] w-[100%] text-white bg-black flex flex-1 border border-white rounded-[20px] focus:outline-none"
            />
            <svg
              className="absolute right-2 h-[33px] cursor-pointer w-[42px] text-white bg-black p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <GrLinkNext className="text-[22px] text-gray-400  " />
            </svg>{" "}
          </div>
          <br />
          <div className="flex space-x-2 " >
          <div className="border-[4px] text-[22px] h-[60px] w-[60px] flex justify-center items-center cursor-pointer hover:bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
            <GrInstagram  />
          </div>
          <div className="border-[4px] text-[22px] h-[60px] w-[60px] flex justify-center items-center cursor-pointer hover:bg-[#355089] " >
            <ImFacebook  />
          </div>
          <div className="border-[4px] text-[22px] h-[60px] w-[60px] flex justify-center items-center cursor-pointer hover:bg-[#21BE5C] " >
            <FaWhatsapp  />
          </div>
          </div>
        </div>
      </div>
<br />
<div className="mb-3 md:mt-10 flex md:flex-row flex-col md:justify-between justify-center items-center gap-3 " >
  <div className="text-[#A2A2A2] text-[13px] " >© 2020-2023 Bullman Equipment. All Rights Reserved.</div>
  <div className="text-[#e2e0e0] text-[11px]" >PAIEMENT 100% SÉCURISÉ</div>
  <div className="flex space-x-2 " >
    <Image src={img6} className="h-[20px] w-[33px] " />
    <Image src={img7} className="h-[20px] w-[33px] " />
    <Image src={img8} className="h-[20px] w-[33px] " />
    <Image src={img9} className="h-[20px] w-[33px] " />
    <Image src={img10} className="h-[20px] w-[33px] " />
    <Image src={img11} className="h-[20px] w-[33px] " />
    <Image src={img12} className="h-[20px] w-[33px] " />

  </div>
</div>

    </div>
  );
}
