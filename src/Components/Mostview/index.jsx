"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import img from "../../../Images/23.webp";
import img1 from "../../../Images/24.webp";
import img2 from "../../../Images/22.webp";
import img3 from "../../../Images/33.webp";

export default function Most() {
  const FcPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...prevArrowStyles }}
        onClick={onClick}
      />
    );
  };

  const MdNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...nextArrowStyles }}
        onClick={onClick}
      />
    );
  };

  const prevArrowStyles = {
    position: "absolute",
    top: "50%",
    left: "15px",
    zIndex: "1",
    cursor: "pointer",
    transform: "translateY(-50%)",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    background: "black",
    justifyContent: "center",
  };

  const nextArrowStyles = {
    position: "absolute",
    top: "50%",
    right: "15px",
    zIndex: "1",
    cursor: "pointer",
    transform: "translateY(-50%)",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    background: "black",
    justifyContent: "center",
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <FcPrevArrow />,
    nextArrow: <MdNextArrow />,
  };

  return (
    <div className="md:px-12 md:pt-10 mb-3">
      <div>
        <p className="text-[20px]  ">
          <b>MOST VIEWED PRODUCTS</b>{" "}
        </p>
      </div>
      <Slider {...settings} >
        <div className="px-2  overflow-hidden ">
          <Image src={img} className="w-full transition-all duration-300 cursor-pointer hover:scale-110 h-[270px] " />
          <p className="text-[13px]">WOMEN'S COMPETITION PACK 150kg + bar</p>
          <p className="pt-2">
            <b>€624.17</b>{" "}
          </p>
        </div>
        <div className="px-2 overflow-hidden">
          <Image src={img1} className="w-full transition-all duration-300 cursor-pointer hover:scale-110 h-[270px]" />
          <p className="text-[13px]">WOMEN'S COMPETITION PACK 150kg + bar</p>
          <p className="pt-2">
            <b>€654.17</b>{" "}
          </p>
        </div>
        <div className="px-2 overflow-hidden">
          <Image src={img2} className="w-full transition-all duration-300 cursor-pointer hover:scale-110 h-[270px]" />
          <p className="text-[13px]">WOMEN'S COMPETITION PACK 150kg + bar</p>
          <p className="pt-2">
            <b>€654.17</b>{" "}
          </p>
        </div>
        <div className="px-2 overflow-hidden">
          <Image src={img3} className="w-full transition-all duration-300 cursor-pointer hover:scale-110 h-[270px]" />
          <p className="text-[13px]">WOMEN'S COMPETITION PACK 150kg + bar</p>
          <p className="pt-2">
            <b>€644.17</b>{" "}
          </p>
        </div>
      </Slider>
    </div>
  );
}
