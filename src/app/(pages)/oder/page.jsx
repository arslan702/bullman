"use client";
import Most from "@/Components/Mostview";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../../Images/35.webp";
import img1 from "../../../../Images/36.webp";
import img2 from "../../../../Images/37.jpg";
import img3 from "../../../../Images/footer/7.webp";
import img4 from "../../../../Images/pay.svg";
import img5 from "../../../../Images/15.webp"
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";


export default function Order() {
  const [activeTab, setActiveTab] = useState(0);
  const [personalInfoOpen, setPersonalInfoOpen] = useState(true); // Track whether personal info section is open or closed
  const [addressOpen, setAddressOpen] = useState(true); // Track whether addresses section is open or closed
  const [shippingOpen, setShippingOpen] = useState(true); // Track whether addresses section is open or closed
  const [paymentOpen, setPaymentOpen] = useState(true); // Track whether addresses section is open or closed
  const [cardOpen, setCardOpen] = useState(true); // Track whether addresses section is open or closed
  const [transferOpen, setTransferOpen] = useState(true); // Track whether addresses section is open or closed
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    // You can perform any actions based on the selected country here
    console.log("Selected Country: " + event.target.value);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const togglePersonalInfo = () => {
    console.log("Toggling personal info");
    setPersonalInfoOpen(!personalInfoOpen);
  };

  const toggleAddress = () => {
    console.log("Toggling addresses");
    setAddressOpen(!addressOpen);
  };

  const toggleShipping = () => {
    console.log("Toggling shipping");
    setShippingOpen(!shippingOpen);
  };

  const togglePayment = () => {
    console.log("Toggling payment");
    setPaymentOpen(!paymentOpen);
  };
  const toggleCard = () => {
    console.log("Toggling card");
    setCardOpen(!cardOpen);
  };
  const toggleTransfer = () => {
    console.log("Toggling transfer");
    setTransferOpen(!transferOpen);
  };

  return (
    <div className="py-10 md:px-20">
      <div className="md:flex md:space-x-10">
        <div className="bg-white h-auto md:w-[70%] w-full p-[28px]">
          <p
            className="text-[17px] text-[#313537] font-[400] pb-1 cursor-pointer"
            onClick={togglePersonalInfo}
          >
            1. PERSONAL INFORMATION
          </p>
          <hr />
          {personalInfoOpen && (
            <div>
              <div className="tab-buttons flex flex-row space-x-10 text-[#a8a8a8] pt-3">
                <button
                  onClick={() => handleTabClick(0)}
                  className={activeTab === 0 ? "active" : "p-2"}
                >
                  CheckOut as a Guest
                </button>
                <div className="h-5 border mt-3"></div>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : "p-2"}
                >
                  Log In
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 0 && (
                  <div className="mb-5 w-full border-[1px] mt-5 p-[22px]">
                    <div className="w-full border-[1px] p-[22px]">
                      <p>Title</p>
                      <div className="flex space-x-10 mt-2">
                        <span className="flex space-x-2">
                          <input type="radio" name="title" id="mr" />
                          <p>Mr</p>
                        </span>
                        <span className="flex space-x-2">
                          <input type="radio" name="title" id="mrs" />
                          <p>Mrs</p>
                        </span>
                      </div>
                      <div className="pt-5">
                        <div className="my-3">
                          <label htmlFor="fname">First name</label>
                          <br />
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            className="w-full h-10 outline-none border mt-2 px-4"
                          />
                          <p className="text-[13px] py-3">
                            Only letters and the period (.), followed by a
                            space, are allowed.
                          </p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="lname">Last name</label>
                          <br />
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            className="w-full h-10 outline-none border mt-2 px-4"
                          />
                          <p className="text-[13px] py-3">
                            Only letters and the period (.), followed by a
                            space, are allowed.
                          </p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="email">Email</label>
                          <br />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4"
                          />
                        </div>
                        <p>
                          Create an account{" "}
                          <span>
                            <i className="text-[#84848a]">(optional)</i>{" "}
                          </span>{" "}
                        </p>
                        <p className="text-[#84848a] text-[14px]">
                          And save time on your next order!
                        </p>
                        <div className="my-4 pt-2">
                          <label htmlFor="password">Password</label>
                          <br />
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4"
                          />
                        </div>
                        <div className="flex space-x-2">
                          <input
                            type="checkbox"
                            name="newsletter"
                            id="newsletter"
                          />
                          <span>
                            <p className="pt-2">Receive our newsletter</p>
                            <p className="text-[12.5px] text-[#84848a]">
                              <i>
                                You can unsubscribe anytime. You will find our
                                contact information for this in the conditions
                                of use of the site.
                              </i>
                            </p>
                          </span>
                        </div>
                        <br />
                        <div className="flex space-x-2">
                          <input type="checkbox" name="terms" id="terms" />
                          <span>
                            <p className="">
                              I accept the terms and conditions and privacy
                              policy
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] float-right border-[black] text-[12px] py-[10px] px-[32px] text-white">
                      Continue
                    </button>
                    <br />
                    <br />
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="mb-5 w-full border-[1px] mt-5 p-[22px]">
                    <div className="w-full border-[1px] p-[22px]">
                      <div className="pt-5">
                        <div className="my-3">
                          <label htmlFor="loginEmail">Email</label>
                          <br />
                          <input
                            type="email"
                            id="loginEmail"
                            name="loginEmail"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4"
                          />
                        </div>
                        <div className="my-4 pt-2">
                          <label htmlFor="loginPassword">Password</label>
                          <br />
                          <input
                            type="password"
                            id="loginPassword"
                            name="loginPassword"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p>
                          <a href="/">Forgot your password?</a>
                        </p>
                        <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] border-[black] text-[12px] py-[10px] px-[32px] text-white">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Addresses details */}
          <div>
            <p
              className="text-[17px] text-[#313537] font-[400] pt-6 pb-1 cursor-pointer"
              onClick={toggleAddress}
            >
              2. ADDRESSES
            </p>
          </div>
          <hr />
          <br />
          {addressOpen && (
            <div className="p-[28px] border ">
              <p className="text-[14px] font-[500] ">
                The selected address will be used as both a home address (for
                billing) and a delivery address.
              </p>
              <br />
              <div className="my-3 pt-2 ">
                <label className="text-[#414141] font-[17px] " htmlFor="fname">
                  First name
                </label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">Name</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">Company</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">VAT number</label>
                <br />
                <input
                  type="number"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">Address</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">Additional address</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">Postal code</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname">City</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="countrySelect">Country:</label>
                <select
                  className="w-full h-10 outline-none border px-4 mt-2 text-gray-400  hover:border-[#d1d1d1] hover:border-[2px]  "
                  id="countrySelect"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">--Please choose a country--</option>
                  <option value="USA">France</option>
                  <option value="CAN">Spain</option>
                  <option value="GBR">Germany</option>
                  <option value="AUS">Hungry</option>
                </select>
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="number">Phone</label>
                <br />
                <input
                  type="number"
                  id="fname"
                  name="number"
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="flex space-x-2">
                <input type="checkbox" name="terms" id="terms" />
                <span>
                  <p className=""> Also use this address for billing</p>
                </span>
              </div>
              <br />
              <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] border-[black] text-[12px] py-[10px] px-[32px] text-white">
                Continue
              </button>
            </div>
          )}

          {/* Shipping method */}
          <div>
            <p
              className="text-[17px] text-[#313537] font-[400] pb-1 cursor-pointer"
              onClick={toggleShipping}
            >
              3. SHIPPING METHOD
            </p>
          </div>
          <hr />
          <br />
          {shippingOpen && (
            <div className="border p-[28px] ">
              <div className="md:flex space-x-8 text-[16px] py-3  ">
               <div className="flex space-x-8 md:w-[65%] w-full" >
                <input type="radio" name="" id="" className="flex items-start leading-[0px] " />
                <Image src={img} className="h-[40px] w-[40px] " />
                <p className="md:w-[65%] text-[14px] ">
                  Collection from BULLMAN showroom
                </p>
              </div>
                <p className="md:w-[35%] text-[14px] pt-1 md:px-0 px-4 ">45 rue Délizy, Pantin</p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4">free</p>
              </div>
              <hr />
              <div className="md:flex space-x-8  text-[16px] py-3 ">
              <div className="flex space-x-8 md:w-[60%] w-full" >
                <input type="radio" name="" id="" />
                <Image src={img1} className="h-[40px] w-[40px] " />
                <p className="md:w-[65%] text-[14px] ">DPD Relay Point</p>
               </div>
                <p className="md:w-[30%] text-[14px] pt-1 md:px-0 px-4">Relay Point 24-72h</p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4">€6.88 incl. VAT</p>
              </div>
              <hr />
              <div className="md:flex space-x-8  text-[16px] py-3 ">
              <div className="flex space-x-8 md:w-[58%] w-full  " >
                <input type="radio" name="" id="" />
                <Image src={img2} className="h-[40px] w-[40px] " />
                <p className="md:w-[40%]  text-[14px] ">Home (Express)</p>
                </div>
                <p className="md:w-[30%] text-[14px] pt-1 md:px-0 px-4 ">2-3 days</p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4">€9.60 incl. VAT</p>
              </div>
              <hr />
              <p className="pt-3 text-[15px] ">
                Enter your mobile number, you will be notified by SMS during
                Home delivery (Express)
              </p>
              <div className=" ">
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="w-full h-12 outline-none border  px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <br />
              <p className="pt-3 text-[15px] pb-1 ">
                {" "}
                If you would like to add a comment to your order, please write
                it in the field below.{" "}
              </p>
              <div className=" ">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  className="w-full h-20 outline-none border  px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <button className="bg-[#315593] hover:bg-[#7a7975] mt-4  border-[2px] float-right border-[black] text-[12px] py-[10px] px-[32px] text-white">
                Continue
              </button>
              <br /> <br />
            </div>
          )}

          {/* Payment method */}
          <div>
            <p
              className="text-[17px] text-[#313537] font-[400] pb-1 cursor-pointer"
              onClick={togglePayment}
            >
              4. PAYMENT
            </p>
          </div>
          <hr />
          {paymentOpen && (
            <div>
              <div>
                <p className="text-[17px] font-[400] pb-1 cursor-pointer">
                  <div className="flex py-3 space-x-3 ">
                    <input type="radio" name="" id="" onClick={toggleCard} />
                    <p className="font-[500] text-[16px] ">
                      Bank Cards (CB, VISA, Mastercard, Amex, etc.)
                    </p>
                    <Image src={img3} className="h-[20px] w-[33px] " />
                  </div>
                </p>
              </div>
              {cardOpen && (
                //  card details  // // //
                <div>
                  <p className="text-[14px] font-[500] pb-1 ">
                    {" "}
                    Please enter your card information
                  </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Card holder "
                    className="h-12 w-full shadow-md rounded-xl outline-none px-4 border-[1px] "
                  />
                  <div className="h-[92px] w-full border-[1px] rounded-xl mt-5 ">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Card Number "
                      className="  outline-none px-4 py-2 shadow-md  "
                    />
                    <hr />
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-[50%] px-4 py-2 outline-[#FF0000] "
                      />
                      <div className="h-12 border "></div>
                      <input
                        type="text"
                        placeholder="HVAC / CVV"
                        className="w-[50%] px-4 py-2 outline-[#FF0000]  "
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* // immediate transfer  details  // // //  */}

              <div>
                <p className="text-[17px] font-[400] pb-1 cursor-pointer">
                  <div className="flex py-3 space-x-3 ">
                    <input
                      type="radio"
                      name=""
                      id=""
                      onClick={toggleTransfer}
                      className="p-2"
                    />
                    <p className="font-[500] text-[16px] ">
                      Pay by immediate transfer + €0.30Reduction
                    </p>
                  </div>
                </p>
              </div>
              {transferOpen && (
                <div>
                  <Image src={img4} />
                  <br />
                  <div className="h-10 w-full border-[1px] "></div>
                  <div className="flex py-3 space-x-3 ">
                    <input type="checkbox" name="" id="" />
                    <p className="font-[500] text-[16px] ">
                      I have read the general conditions of sale and I adhere to
                      them without reservation.
                    </p>
                  </div>
                  <button className=" bg-[#c9c8c5] border-[2px] hover:border-[0px] mt-1  border-[black] text-[12px] py-[10px] px-[32px] text-white">
                    Order
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
       
    <div className="bg-white md:w-[37%] w-full p-[28px]">
      <div className="flex justify-between font-[400]">
        <p className="">1 item</p>
        <p className="details-toggle cursor-pointer flex  " onClick={toggleDetails}>
          Check details <span className="icon pt-1">{isOpen ? <RxTriangleDown  /> : <RxTriangleUp  />}</span>
        </p>
      </div>
      {isOpen && (
        // cart details
        <div className="details-content mt-5 ">
<div className="flex space-x-3 cursor-pointer py-3 " >
  <div><Image src={img5} className="h-[100px] w-[100px] hover:scale-110 " /> </div>
  <div >
    <p className="text-[12px] pt-2 " >Weight belt</p>
    <div className="flex mt-2 " >
      <p className="h-10 w-14 border-[1px] flex justify-center items-center " >1</p>
      <div>
      <RxTriangleUp className="h-5 w-7 border-[1px] "  />
      <RxTriangleDown className="h-5 w-7 border-[1px] "  />
      </div>
    </div>
  </div>
    <div className="flex items-center text-[12px] text-gray-400 " >€15.00</div>
</div>
        </div>
      )}
      {/* promoo code  */}
      <div className="md:flex mt-3 "  >
<input type="text" placeholder="Promo Code" className="border-[1px] w-auto px-4 py-2 mt-2 outline-none " />
<button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] md:w-auto w-full mt-2 border-[black] text-[10px] py-[10px] px-[30px] text-white">
                      ADD
                    </button>
                    </div>
                    <br />
                    <div className="flex justify-between " >
                      <p className="font-[600] text-[15px] " >TOTAL PRICE)</p>
                      <p className="text-[14px] " >€15.00</p>
                  </div>
                  <div className="flex justify-between mt-1 " >
                      <p className="font-[600] text-[15px] " >Taxes included :</p>
                      <p className="text-[14px] " >€2.50</p>
                  </div>
    </div>

      </div>
      <br />
      <Most />
    </div>
  );
}
