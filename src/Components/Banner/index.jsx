
 "use client"

import React from 'react';

function VideoComponent() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video loop muted autoPlay className='md:h-[100%] md:w-[100%]  '>
        <source src="/Video/video.mp4" type="video/mp4" className='md:h-[100%] md:w-[100%] h-[500px] ' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute md:top-[20%] top-[5%] right-[45px] text-[white] '>
        <p className='md:text-[44px] text-[12px] md:text-left text-center font-[700] leading-none '>Prix Justes et <br /> Accessibles</p>
       <div className='md:pt-[10px] pt-[5px] font-[600] md:text-left text-center md:text-[18px] text-[10px] ' >
        <p>DÉCOUVREZ UNE LARGE</p>
        <p>GAMME D'ÉQUIPEMENTS PREMIUM, </p>
        <p>DEVELOPPÉS EN FRANCE</p>
        <p>PAR DES PASSIONNÉS</p>
        </div>
        <div className='md:mt-4 mt-2 flex justify-center items-center gap-2 flex-wrap ' >
        <a href="">  <button className='bg-[#325897] hover:bg-[#3B4042] font-[600] text-white md:px-5  px-2 py-2 border-black border-[1px] md:text-[12px] text-[10px] ' >BEST-SELLERS </button> </a>
        <a href="">  <button className='bg-[#325897] font-[600] hover:bg-[#3B4042] text-white md:px-5 px-2 py-2 border-black border-[1px] md:text-[12px] text-[10px] ' >CONCEPT 2 </button> </a>
        <a href="/achievements">  <button className='bg-[#325897] font-[600] hover:bg-[#3B4042] text-white md:px-5 px-2 py-2 border-black border-[1px] md:text-[12px] text-[10px] ' >NOS RÉALISATIONS</button> </a>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;

