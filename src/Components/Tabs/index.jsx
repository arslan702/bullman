"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import img from "../../../Images/24.webp";
// import img1 from "../../../Images/23.webp";
// import img2 from "../../../Images/13.webp";
// import img3 from "../../../Images/14.webp";
// import img4 from "../../../Images/15.webp";
// import img5 from "../../../Images/16.webp";
// import img6 from "../../../Images/17.webp";
// import img7 from "../../../Images/18.webp";
import axios from "axios";
import { API_URL } from "@/config";
import { useRouter } from "next/navigation";


const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);
  const [products, setProducts] = useState([]);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    axios.get(`${API_URL}/product/get`)
    .then((res) => {
      setProducts(res?.data)
    })
    .catch((err) => {
      console.log({err})
    })
  },[])

  console.log({products})

  const handleClick = (id) => {
    router.push(`/details/${id}`)
  } 

  return (
    <div className=" rounded-lg md:px-12 pt-10 ">
      <div className="md:flex md:justify-between md:px-0 px-6  ">
        <div>
          <p className="text-[20px] md:max-w-72 max-w-48 border-black pb-2  border-b-[2px] ">
            <b>NOTRE SÉLECTION</b>{" "}
          </p>
        </div>
        <div className="md:flex md:space-x-3 md:py-0 py-2 ">
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 1 ? "bg-[#E6EAEF] " : "bg-transparent "
            }`}
            onClick={() => handleTabClick(1)}
          >
            BESTSELLERS
          </button>
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[2px] border-b-[1px]  md:border-transparent border-black hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 2 ? "bg-gray-200" : "bg-transparent "
            }`}
            onClick={() => handleTabClick(2)}
          >
            DUMBBELLS&KETTLEBELLS
          </button>
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[2px] border-b-[1px]  md:border-transparent border-black hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 3 ? "bg-gray-200" : "bg-transparent "
            }`}
            onClick={() => handleTabClick(3)}
          >
            PLATES
          </button>
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[2px] border-b-[1px]  md:border-transparent border-black hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 4 ? "bg-gray-200" : "bg-transparent "
            }`}
            onClick={() => handleTabClick(4)}
          >
            BAREBELLS
          </button>
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[2px] border-b-[1px]  md:border-transparent border-black hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 5 ? "bg-gray-200" : "bg-transparent "
            }`}
            onClick={() => handleTabClick(5)}
          >
            MACHINE&ERGOS
          </button>
          <button
            className={`w-full p-2 text-[14px] font-[600] md:border-b-[2px] border-b-[1px]  md:border-transparent border-black hover:border-[#315593] hover:border-b-[2px] ${
              activeTab === 6 ? "bg-gray-200" : "bg-transparent "
            }`}
            onClick={() => handleTabClick(6)}
          >
            FREESHIPPING
          </button>
        </div>
      </div>
      <div className="">
        {activeTab === 1 && (
          <div>
            <div className="grid md:grid-cols-4 grid-cols-2 cursor-pointer px-4 ">
            {products?.map((prod) => (
              <div key={prod?._id} onClick={() => handleClick(prod?._id)} className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full ">
                  <Image alt="img" src={`${API_URL}/${prod?.images[0]?.url}`} width={350} height={250} className="h-[250px] w-[350px] hover:opacity-0"/>
                  {prod?.images[1]?.url && (
                  <Image
                    src={`${API_URL}/${prod?.images[1]?.url}`}
                    alt="img"
                    width={350} height={250}
                    className="h-[250px] w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100  "
                  />
                  )}
                </div> 
                <p className="text-[12px] font-[500]">{prod?.name}</p> 
                <p className="text-[12px] pt-2 font-[500]">€{prod?.retail_price_tax_inc}</p>            
              </div>
             ))}
              {/* <div className="md:w-[100%] sm:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full ">
                  <Image alt="img" src={img2} className="h-[250px] w-[350px] hover:opacity-0"/>
                  <Image
                    alt="img"
                    src={img3}
                    className="h-[250px] w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100  "
                  />
                </div> 
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>            
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img4} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img5}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>  
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>              
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img6} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img7}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>   
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>             
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img1} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100  "
                  />
                </div> 
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>            
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img3} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img2}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>  
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>              
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img5} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img4}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>  
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>              
              </div>
              <div className="md:w-[100%] w-[100%] mx-auto h-[315px] mt-1 mb-16 relative inline-block hover:opacity-100 ">
                <div className="relative h-full">
                  <Image alt="img" src={img7} className="h-full w-full hover:opacity-0 " />
                  <Image
                    alt="img"
                    src={img6}
                    className="h-full w-full absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>   
                <p className="text-[12px] font-[500] " >PLYOBOX</p> 
                <p className="text-[12px] pt-2 font-[500] "  >€82.50</p>             
              </div> */}
            </div>
          </div>
        )}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
        {activeTab === 4 && <div>Content for Tab 3</div>}
        {activeTab === 5 && <div>Content for Tab 3</div>}
        {activeTab === 6 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;
