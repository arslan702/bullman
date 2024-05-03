"use client";
import Most from "@/Components/Mostview";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../../Images/35.webp";
import img1 from "../../../../Images/36.webp";
import img2 from "../../../../Images/37.jpg";
import img3 from "../../../../Images/footer/7.webp";
import img4 from "../../../../Images/pay.svg";
// import img5 from "../../../../Images/15.webp"
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";
import { API_URL } from "@/config";
import axios from "axios";

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
  const [products, setProducts] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [VAT_number, setVatNumber] = useState("");
  const [address, setAddress] = useState("");
  const [additional_address, setAdditionalAddress] = useState("");
  const [postal_address, setPostalAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [shipping_method, setShippingMethod] = useState("");
  const [mobile_no, setMobileNumber] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("products")) || [];
    console.log({ items });
    setProducts(items);
  }, []);

  const createOrder = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/order/create`, {
        firstName,
        lastName,
        company,
        VAT_number,
        address,
        additional_address,
        postal_address,
        city,
        country: selectedCountry,
        phone,
        shipping_method: "Collection from BULLMAN showroom",
        mobile_no,
        comment,
        products,
      })
      .then((res) => {
        console.log(res?.data);
        localStorage.removeItem("products");
      })
      .catch((err) => {
        console.log({ err });
      });
  };

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

  const total_price = products && products?.reduce((sum, product) => Number(sum) + Number(product?.retail_price_tax_excl), 0).toFixed(2)
  const including_taxes = products && products?.reduce((sum, product) => sum + product?.retail_price_tax_inc, 0).toFixed(2)

  return (
    <div className="py-10 md:px-20">
      <div className="md:flex md:space-x-10">
        <div className="bg-white h-auto md:w-[70%] w-full p-[28px]">
          <p
            className="text-[17px] text-[#313537] font-[400] pb-1 cursor-pointer"
            onClick={togglePersonalInfo}
          >
            1. INFORMATIONS PERSONNELLES
          </p>
          <hr />
          {personalInfoOpen && (
            <div>
              <div className="tab-buttons flex flex-row space-x-10 text-[#a8a8a8] pt-3">
                <button
                  onClick={() => handleTabClick(0)}
                  className={activeTab === 0 ? "active" : "p-2"}
                >
                  Commander en tant qu'invite
                </button>
                <div className="h-5 border mt-3"></div>
                <button
                  onClick={() => handleTabClick(1)}
                  className={activeTab === 1 ? "active" : "p-2"}
                >
                  S'identifier
                </button>
              </div>
              <div className="tab-content">
                {activeTab === 0 && (
                  <div className="mb-5 w-full border-[1px] mt-5 p-[22px]">
                    <div className="w-full border-[1px] p-[22px]">
                      <p className="text-[#000000]">Titre</p>
                      <div className="flex space-x-10 mt-2">
                        <span className="flex space-x-2">
                          <input type="radio" name="title" id="mr" />
                          <p className="text-[#000000]">M</p>
                        </span>
                        <span className="flex space-x-2">
                          <input type="radio" name="title" id="mrs" />
                          <p className="text-[#000000]">Mme</p>
                        </span>
                      </div>
                      <div className="pt-5">
                        <div className="my-3">
                          <label htmlFor="fname" className="text-[#000000]">Prénom</label>
                          <br />
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            className="w-full h-10 outline-none border mt-2 px-4"
                          />
                          <p className="text-[13px] py-3 text-[#000000]">
                            <i>Seules les lettres et le point (.), suivi d'un espace, sont autorisés.</i>
                          </p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="lname" className="text-[#000000]">Nom</label>
                          <br />
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            className="w-full h-10 outline-none border mt-2 px-4"
                          />
                          <p className="text-[13px] py-3 text-[#000000]">
                            <i>Seules les lettres et le point (.), suivi d'un espace, sont autorisés.</i>
                          </p>
                        </div>
                        <div className="my-3">
                          <label htmlFor="email" className="text-[#000000]">Email</label>
                          <br />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4 text-[#000000]"
                          />
                        </div>
                        <p className="text-[#000000]"> 
                          Créer un compte{" "}
                          <span>
                            <i className="text-[#84848a]">(facultatif)</i>{" "}
                          </span>{" "}
                        </p>
                        <p className="text-[#84848a] text-[14px]">
                          Et gagnez du temps sur votre prochaine commande !
                        </p>
                        <div className="my-4 pt-2">
                          <label htmlFor="password" className="text-[#000000]">Mot de passe</label>
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
                            <p className="pt-2 text-[#000000]">Recevoir notre newsletter</p>
                            <p className="text-[12.5px] text-[#84848a]">
                              <i>
                              Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.
                              </i>
                            </p>
                          </span>
                        </div>
                        <br />
                        <div className="flex space-x-2">
                          <input type="checkbox" name="terms" id="terms" />
                          <span>
                            <p className="text-[#000000]">
                              J'accepte les conditions générales et la politique de confidentialité
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] float-right border-[black] text-[12px] py-[10px] px-[32px] text-white">
                      CONTINUER
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
                          <label htmlFor="loginEmail" className="text-[#000000]">Email</label>
                          <br />
                          <input
                            type="email"
                            id="loginEmail"
                            name="loginEmail"
                            className="w-full h-10 outline-none border mt-2 mb-2 px-4"
                          />
                        </div>
                        <div className="my-4 pt-2">
                          <label htmlFor="loginPassword" className="text-[#000000]">Mot de passe</label>
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
                          <a href="/" className="text-[#000000]">Mot de passe oublié?</a>
                        </p>
                        <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] border-[black] text-[12px] py-[10px] px-[32px] text-white">
                          CONTINUER
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
              <p className="text-[14px] font-[500] text-[#000000]">
                L’adresse sélectionnée sera utilisée à la fois comme adresse domiciliaire (pour
                facturation) et une adresse de livraison.
              </p>
              <br />
              <div className="my-3 pt-2 ">
                <label className="text-[#414141] font-[17px] " htmlFor="fname">
                  Prénom
                </label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Nom</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Compagnie</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Numéro de TVA</label>
                <br />
                <input
                  type="number"
                  id="fname"
                  name="fname"
                  value={VAT_number}
                  onChange={(e) => setVatNumber(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Address</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Adresse supplémentaire</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={additional_address}
                  onChange={(e) => setAdditionalAddress(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Code postal</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={postal_address}
                  onChange={(e) => setPostalAddress(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="fname" className="text-[#414141]">Ville</label>
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="countrySelect" className="text-[#414141]">Pays:</label>
                <select
                  className="w-full h-10 outline-none border px-4 mt-2 text-gray-400  hover:border-[#d1d1d1] hover:border-[2px]  "
                  id="countrySelect"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="" className="text-[#414141]">--S’il vous plaît choisir un pays--</option>
                  <option value="USA" className="text-[#414141]">France</option>
                  <option value="CAN" className="text-[#414141]">Spain</option>
                  <option value="GBR" className="text-[#414141]">Germany</option>
                  <option value="AUS" className="text-[#414141]">Hungry</option>
                </select>
              </div>
              <div className="my-3 pt-2">
                <label htmlFor="number" className="text-[#414141]">Téléphone</label>
                <br />
                <input
                  type="number"
                  id="fname"
                  name="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-10 outline-none border mt-2 px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <div className="flex space-x-2">
                <input type="checkbox" name="terms" id="terms" />
                <span>
                  <p className="text-[#414141]"> Utilisez également cette adresse pour la facturation</p>
                </span>
              </div>
              <br />
              <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] border-[black] text-[12px] py-[10px] px-[32px] text-white">
                CONTINUER
              </button>
            </div>
          )}

          {/* Shipping method */}
          <div>
            <p
              className="text-[17px] text-[#313537] font-[400] pb-1 cursor-pointer"
              onClick={toggleShipping}
            >
              3. MODE D’EXPÉDITION
            </p>
          </div>
          <hr />
          <br />
          {shippingOpen && (
            <div className="border p-[28px] ">
              <div className="md:flex space-x-8 text-[16px] py-3  ">
                <div className="flex space-x-8 md:w-[65%] w-full">
                  <input
                    type="radio"
                    name=""
                    id=""
                    className="flex items-start leading-[0px] "
                  />
                  <Image alt="img" src={img} className="h-[40px] w-[40px] " />
                  <p className="md:w-[65%] text-[14px] text-[#414141]">
                    Collection du showroom BULLMAN
                  </p>
                </div>
                <p className="md:w-[35%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">
                  45 rue Délizy, Pantin
                </p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">free</p>
              </div>
              <hr />
              <div className="md:flex space-x-8  text-[16px] py-3 ">
                <div className="flex space-x-8 md:w-[60%] w-full">
                  <input type="radio" name="" id="" />
                  <Image alt="img" src={img1} className="h-[40px] w-[40px] " />
                  <p className="md:w-[65%] text-[14px] text-[#414141]">DPD Relay Point</p>
                </div>
                <p className="md:w-[30%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">
                  Relay Point 24-72h
                </p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">
                  €6.88 incl. VAT
                </p>
              </div>
              <hr />
              <div className="md:flex space-x-8  text-[16px] py-3 ">
                <div className="flex space-x-8 md:w-[58%] w-full  ">
                  <input type="radio" name="" id="" />
                  <Image alt="img" src={img2} className="h-[40px] w-[40px] " />
                  <p className="md:w-[40%] text-[14px] text-[#414141]">Home (Express)</p>
                </div>
                <p className="md:w-[30%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">
                  2-3 days
                </p>
                <p className="md:w-[20%] text-[14px] pt-1 md:px-0 px-4 text-[#414141]">
                  €9.60 incl. VAT
                </p>
              </div>
              <hr />
              <p className="pt-3 text-[15px] text-[#414141]">
              Entrez votre numéro de téléphone portable, vous serez avertie par SMS pendant Livraison à domicile (Express)
              </p>
              <div className=" ">
                <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={mobile_no}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="w-full h-12 outline-none border  px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <br />
              <p className="pt-3 text-[15px] pb-1 text-[#414141]">
                {" "}
                Si vous souhaitez ajouter un commentaire à votre commande, veuillez écrire
                dans le champ ci-dessous.{" "}
              </p>
              <div className=" ">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  className="w-full h-20 outline-none border  px-4 hover:border-[#d1d1d1] hover:border-[2px]  "
                />
              </div>
              <button className="bg-[#315593] hover:bg-[#7a7975] mt-4  border-[2px] float-right border-[black] text-[12px] py-[10px] px-[32px] text-white">
                CONTINUER
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
              4. PAIEMENT
            </p>
          </div>
          <hr />
          {paymentOpen && (
            <div>
              <div>
                <p className="text-[17px] font-[400] pb-1 cursor-pointer">
                  <div className="flex py-3 space-x-3 ">
                    <input type="radio" name="" id="" onClick={toggleCard} />
                    <p className="font-[500] text-[16px] text-[#414141]">
                      Bank Cards (CB, VISA, Mastercard, Amex, etc.)
                    </p>
                    <Image
                      alt="img"
                      src={img3}
                      className="h-[20px] w-[33px] "
                    />
                  </div>
                </p>
              </div>
              {cardOpen && (
                //  card details  // // //
                <div>
                  <p className="text-[14px] font-[500] pb-1 text-[#414141]">
                    {" "}
                    Veuillez saisir les informations de votre carte
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
                    <p className="font-[500] text-[16px] text-[#414141]">
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
                    <p className="font-[500] text-[16px] text-[#414141]">
                    J’ai lu les conditions générales de vente et j’adhère à
                      sans réserve.
                    </p>
                  </div>
                  <button
                    onClick={createOrder}
                    className=" bg-[#c9c8c5] border-[2px] hover:border-[0px] mt-1  border-[black] text-[12px] py-[10px] px-[32px] text-white"
                  >
                    Order
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
          <div
            className="bg-white md:w-[37%] w-full p-[28px]"
          >
          <div>
            <div className="flex justify-between font-[400] text-[#414141]">
              <p className="">{products?.length} item</p>
              <p
                className="details-toggle cursor-pointer flex text-[#414141]"
                onClick={toggleDetails}
              >
                Check details{" "}
                <span className="icon pt-1">
                  {isOpen ? <RxTriangleDown /> : <RxTriangleUp />}
                </span>
              </p>
            </div>
            {isOpen && (
              // cart details
              products?.map((product) => (
              <div key={product?._id} className="details-content mt-5 ">
                <div className="flex space-x-3 cursor-pointer py-3 ">
                  <div>
                    <Image
                      src={`${API_URL}/${product?.images && product?.images[0]?.url}`}
                      width={250}
                      height={250}
                      className="h-[100px] w-[100px] hover:scale-110 "
                    />{" "}
                  </div>
                  <div>
                    <p className="text-[12px] pt-2 text-[#414141]">{product?.name}</p>
                    <div className="flex mt-2 ">
                      <p className="h-10 w-14 border-[1px] flex justify-center items-center text-[#414141]">
                        {product?.orderQuantity}
                      </p>
                      <div>
                        <RxTriangleUp className="h-5 w-7 border-[1px] " />
                        <RxTriangleDown className="h-5 w-7 border-[1px] " />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-[12px] text-gray-400 text-[#414141]">
                    €{product?.retail_price_tax_excl?.toFixed(2)}
                  </div>
                </div>
              </div>
              ))
            )}
            </div>
            {/* promoo code  */}
            <div className="md:flex mt-3 ">
              <input
                type="text"
                placeholder="Promo Code"
                className="border-[1px] w-auto px-4 py-2 mt-2 outline-none "
              />
              <button className="bg-[#315593] hover:bg-[#7a7975] border-[2px] md:w-auto w-full mt-2 border-[black] text-[10px] py-[10px] px-[30px] text-white">
                ADD
              </button>
            </div>
            <br />
            <div className="flex justify-between ">
              <p className="font-[600] text-[15px] text-[#414141]">TOTAL PRICE</p>
              <p className="text-[14px] text-[#414141]">
                €{total_price}
              </p>
            </div>
            <div className="flex justify-between mt-1 ">
              <p className="font-[600] text-[15px] text-[#414141]">Taxes included :</p>
              <p className="text-[14px] text-[#414141]">
                €{including_taxes}
                </p>
            </div>
          </div>
      </div>
      <br />
      <Most />
    </div>
  );
}
