import React from "react";

export default function Top() {
  return (
    <div className="bg-[#FFFFFF] md:px-20 h-[35px] mt-[2px] backdrop-blur-2xl shadow-inner">
      <div className="flex md:justify-end justify-center gap-10 text-[13px] pt-1 cursor-pointer   ">
        <p className="mada-font text-[15px] text-[#000] hover:pb-[0.1px] border-b-[1px] border-transparent hover:border-black">
          Nos réalisations 
        </p>
        <p className="mada-font text-[15px] text-[#000] hover:pb-[0.1px] ml-3 border-b-[1px] border-transparent hover:border-black">
          Cartes Cadeau
        </p>
        <p className="mada-font text-[15px] text-[#000] hover:pb-[0.1px] ml-5 border-b-[1px] border-transparent hover:border-black">
          Contactez-Nous 
        </p>
        <p className="mada-font text-[15px] text-[#000] hover:pb-[0.1px] ml-5 border-b-[1px] border-transparent hover:border-black">
          Statut commande
        </p>
      </div>
    </div>
  );
}
