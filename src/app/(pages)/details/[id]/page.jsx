"use client";
import React, { useEffect, useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import img1 from "../../../../../Images/29.webp";
// import img2 from "../../../../../Images/30.webp";
// import img3 from "../../../../../Images/31.webp";
// import img4 from "../../../../../Images/32.webp";
// import img5 from "../../../../../Images/33.webp";
import img6 from "../../../../../Images/pay.webp";
import img7 from "../../../../../Images/sat.webp";
import img8 from "../../../../../Images/SHIPPING.webp";
// import img9 from "../../../../../Images/plate1.webp";
// import img10 from "../../../../../Images/plates.webp";
import Most from "@/Components/Mostview";
import Seller from "@/Components/Bestseller";
import axios from "axios";
import { API_URL } from "@/config";
import parse from 'html-react-parser';

export default function Details({params}) {
  console.log({params})
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(img1);
  const [activeTab, setActiveTab] = useState(1);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`${API_URL}/product/getOne/${params?.id}`)
    .then((res) => {
      setProduct(res?.data)
    })
    .catch((err) => {
      console.log({err})
    })
  },[])

  console.log({product})

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const togglePopup = (image) => {
    setSelectedImage(image);
    setShowPopup(!showPopup);
  };

  const handleImageClick = () => {
    togglePopup(selectedImage);
    // Navigate to the desired URL
    window.location.href =
      "https://bullmanequipment.com/fr/shop/69-96-plaques-en-caoutchouc-tri-grip-paire-3760849753518.html#/32-poids-5_kg_paire";
  };

  function addToCart(product, quantity) {
    if (typeof localStorage === 'undefined') {
      console.error('localStorage is not available.');
      return;
    }
    // Get existing products from localStorage
    let existingProducts = JSON?.parse(localStorage?.getItem('products')) || [];
  
    // Check if the product with the same ID already exists
    const existingProductIndex = existingProducts?.findIndex(
      (item) => item?._id === product?._id
    );
  
    if (existingProductIndex !== -1) {
      // Product with the same ID already exists, update its quantity
      existingProducts[existingProductIndex].orderQuantity += quantity;
    } else {
      // Product with the same ID does not exist, add it to the array
      existingProducts.push({ ...product, orderQuantity: quantity });
    }
  
    // Update localStorage with the modified products array
    localStorage.setItem('products', JSON.stringify(existingProducts));
  }
  
  return (
    <div className="md:px-16 px-4 pt-3 py-3 mb-5 bg-[#FFFFFF]  ">
      {/* Thumbnails */}
      <div className="flex font-normal md:text-[12px] text-[11px] space-x-2 cursor-pointer px-4 text-[#000]">
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
                {product?.images?.map((image, index) => (
                  <img
                    key={index}
                    className="thumbnail"
                    src={`${API_URL}/${image?.url}`}
                    onClick={() => togglePopup(image?.url)}
                    width={100}
                    height={100}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex items-start justify-center cursor-pointer ">
                {product?.images?.map((image) => (
                  image?.priority == true && 
                <img
                  src={`${API_URL}/${image?.url}` || `${API_URL}/${selectedImage}`}
                  alt="selected"
                  // width={300}
                  // height={300}
                  className="max-w-4/5 h-auto"
                />
                ))}
              </div>
            </div>
            {/* description details  */}
            <div className="flex justify-between w-[350px] md:w-[500px] ml-[30px]">
              <button
                className={`text-[#000] md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 1 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(1)}
              >
                Description
              </button>
              <button
                className={`text-[#000] md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 2 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(2)}
              >
                Garantie BULLMAN
              </button>
              <button
                className={`text-[#000] md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 3 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(3)}
              >
                Expedition
              </button>
              <button
                className={`text-[#000] md:text-[14px] text-[10px] font-[600] md:border-b-[1px] border-b-[1px]  md:border-transparent border-black  hover:border-[#315593] hover:border-b-[2px] ${
                  activeTab === 4 ? " border-b-2 " : " "
                }`}
                onClick={() => handleTabClick(4)}
              >
                Paiement securise
              </button>
            </div>
            <br />
            {/* description  Tab explanation */}
            <div>
              {activeTab === 1 && (
                <div className="px-2   ">
                  {parse(product?.description ? product?.description : '')}
                  {/* <p className="text-[14px] font-[500] ">
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
                      <Image src={img10} className="h-[300px] md:w-[400px] w-[100%] " />
                      <u className="font-[600] ">1-EASY HANDLING</u>
                      <p className="text-[14px] leading-7 ">
                        The 3 integrated ergonomic handles allow easy handling
                        when changing weight, reducing transition time between
                        exercises and reducing the risk of injury.
                      </p>
                    </div>
                    <div className="w-[350px]  ">
                      <Image src={img9} className="h-[300px] md:w-[400px] w-[100%] " />
                      <u className="font-[600] ">2-PROTECTIVE COATING</u>
                      <p className="text-[14px] leading-7 ">
                        These discs are covered with a quality rubber coating,
                        protecting floors and equipment from impacts and
                        scratches while reducing noise during training.
                      </p>
                    </div>
                  </div> */}
                </div>
              )}
              {activeTab === 2 && 
              <div className="px-2 " >
               <p className="mada-font text-[#000000]">GARANTIE À VIE</p> 
               <br />
               <p className="mada-font text-[#000000]">Tous nos accessoires et petits matériels sont garanties 2 ans. <br />
                  Nos barres, plates machines et racks sont garanties 5ans.</p>
                </div>}
              {activeTab === 3 && 
              <div>
                  <p className="mada-font text-[#000000]">EXPEDITION</p>
                <br />
                  <p className="mada-font text-[#000000]">A l'exception des dalles, des racks, de certaines barres et des machines qui sont soumis à un forfait.</p>
                <br />
                  <p className="mada-font text-[#000000]" >Le transport dit "DOMICILE BULLMAN" est au choix de Bullman Equipment.

                    Transport known as “BULLMAN HOME” is at the choice of Bullman Equipment. <br />

                    Lorsque les produits sont en stock, nous expédions généralement sous 48h.<br />

                    La participation aux frais de port est calculée en fonction du prix du panier, du poids et du transporteur sélectionné.</p>
                    <br/>
                  <p className="mada-font text-[#000000]">
                    Règles spécifiques :<br/>
                    -Les packs font l'objet d'un forfait de 59,90€TTC.<br/>
                    -L'expédition de dalles fait l'objet d'un forfait peu importe la quantité : 59,90€ TTC.<br/>
                    -Les machines font l'objet d'un forfait par machine de 59,90€.<br/>
                    -L'expédition de racks est soumise à une surcharge de 59,90€ par commande.<br/>
                    -Nos barres olympiques (sauf les barres d'haltères) font l'objet d'un forfait de 30€ TTC par barre pour les commandes en deçà de 500€.
                  </p>
                </div>}
              {activeTab === 4 && <div className="px-2 "  >
                <p className="mada-font text-[#000000]">PAIEMENT SÉCURISÉ</p>
                <br />
                <p className="mada-font text-[14px] text-[#000000]">Nous vous proposons un paiement sécurisé et crypté en SSL.</p> <br />
                <p className="mada-font text-[#000000]" >Comptant : <br /> -Cartes bancaires, <br /> -Virement instantané, <br /> -Apple Pay. </p><br/>
                <p className="mada-font text-[#000000]" >En plusieurs fois : <br /> -KLARNA 3x, <br /> -KLARNA 10x. </p>
                </div>}
            </div>
          </div>
        </div>
        {/* product details */}
        <div className="md:w-[40%]  h-auto py-4  p-4 md:px-12 px-2 ">
          <p className="mada-font text-[33px] font-[600] max-w-96 pt-2 leading-[1.2em] text-[#000000]">
            {" "}
            {product?.name}{" "}
          </p>
          <i className="text-[12px] text-[#000000]">Shipped within 48 hours</i>

          {/* Weight details */}
          {/* <div>
            <div className="flex justify-between gap-1 items-center mt-4 ">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 1.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€8.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
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
            <div className="flex justify-between gap-1 items-center  mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 3.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€15.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 cursor-pointer items-center ">
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
            <div className="flex justify-between gap-1 items-center mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
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
            <div className="flex justify-between gap-1 items-center mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
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
            <div className="flex justify-between gap-1 items-center mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 2.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€12.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
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
            <div className="flex justify-between gap-1 items-center mt-4">
              <p className="text-[14px] pt-2 font-normal">
                Weight: 3.25 kg - Pair
              </p>
              <p className="pt-1">
                <b>€18.33</b>
              </p>
              <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
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
          </div> */}
          <br />
          {/* <div className="border-[1px] border-[#9A9A9A] "> */}
          <div className="flex md:gap-2 gap-1 items-center cursor-pointer">
              <p onClick={() => setQuantity(quantity - 1)} className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px] text-[#00000]">
                -
              </p>
              <p className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[14px] text-[#00000]">
                {quantity}
              </p>
              <p onClick={() => setQuantity(quantity + 1)} className="h-8 w-10 border-[1px] border-[black] flex justify-center items-center text-[20px] text-[#00000]">
                +
              </p>
            </div>
          {/* </div> */}
          <br />
          <div className=" text-white cursor-pointer text-center py-2 bg-[#315593] text-[#ffffff] hover:bg-gradient-to-b from-blue-700 to-blue-900">
            {" "}
            <button onClick={() => addToCart(product, quantity)}>ADD TO CART</button>{" "}
          </div>
          <br />
          <div className="mb-5">
            <div style={{fontWeight: '700', fontSize: '16px', lineHeight: '23px', color: '#000000'}}>Total:</div><br/>
            <div className="flex">
              <div style={{fontWeight: '700', fontSize: '20px', lineHeight: '23px', color: '#000000'}}>€{quantity >= 1 ? quantity * product?.retail_price_tax_inc : product?.retail_price_tax_inc}<span className="text-[#7a7a7a] text-[16px] font-[400]">{' '}tax incl</span></div>
              <div style={{fontWeight: '500', fontSize: '17px', lineHeight: '23px', color: '#000000', marginLeft: '20px'}}>€{quantity >= 1 ? quantity * product?.retail_price_tax_excl?.toFixed(2) : product?.retail_price_tax_excl?.toFixed(2)}<span className="text-[#7a7a7a] text-[16px] font-[400]">{' '}tax excl</span></div>
            </div>
          </div>
          {/* product specifications */}
          <div className="md:flex flex md:flex-row flex-col justify-center items-center  gap-5 ">
            <div className="md:flex flex md:flex-row flex-col justify-center items-center gap-2  ">
              <Image src={img8} alt="img" className="h-[25px] w-[30px] " />
              <p className="text-[9px] mt-1 ">Shipping</p>
            </div>
            <div className="md:flex gap-2 flex md:flex-row flex-col justify-center items-center">
              <Image src={img7} alt="img" className="h-[25px] w-[30px] " />
              <p className="text-[9px] mt-1 ">SATISFIED OR REFUNDED</p>
            </div>
            <div className="md:flex gap-2 flex md:flex-row flex-col justify-center items-center ">
              <Image src={img6} alt="img" className="h-[25px] w-[20px] " />
              <p className="text-[9px] mt-1 ">SECURE PAYMENT</p>
            </div>
          </div>
          <br />
          <div>
            <p className="text-[16px] font-medium border-b border-gray-300 pb-3 ">
              SPECIFICATIONS
            </p>
            {product?.feature?.map((feat) => (
            <div className="text-[13px] font-medium border-b border-gray-300 py-2 flex space-x-16 ">
              <p className="w-[30%]">{feat?.name}</p>
              <p>{feat?.value}</p>
            </div>
            ))}
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
            <Image src={`${API_URL}/${selectedImage}`} width={350} height={350} alt="popup" className="w-full h-auto" />
          </div>
        </div>
      )}
      <Most/>
      
      <Seller/>
    </div>
  );
}
