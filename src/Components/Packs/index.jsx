import React from 'react';
import Image from 'next/image';
import img from '../../../Images/25.webp'
import img1 from '../../../Images/26.webp'
import img2 from '../../../Images/27.webp'
import img3 from '../../../Images/28.webp'



export default function Packs() {
 
  return (
    <div className='md:px-12 md:pt-10 ' >
       <div>
          <p className="text-[20px] md:max-w-32 max-w-48 border-black pb-2  border-b-[2px] ">
            <b>NOS PACKS</b>{" "}
          </p>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 ' >
 <div>
  <Image src={img} className='transition-all duration-300 cursor-pointer  hover:scale-110 ' />
  <p className='text-[13px] ' >WOMEN'S COMPETITION PACK 150kg + bar</p>
  <p className='pt-2' ><b>€654.17</b> </p>
</div> 
<div>
  <Image src={img1} className='transition-all duration-300 cursor-pointer  hover:scale-110 ' />
  <p className='text-[13px] ' >WOMEN'S COMPETITION PACK 150kg + bar</p>
  <p className='pt-2' ><b>€654.17</b> </p>
</div> 
<div>
  <Image src={img2} className='transition-all duration-300 cursor-pointer  hover:scale-110 ' />
  <p className='text-[13px] ' >WOMEN'S COMPETITION PACK 150kg + bar</p>
  <p className='pt-2' ><b>€654.17</b> </p>
</div> 
<div>
  <Image src={img3} className='transition-all duration-300 cursor-pointer  hover:scale-110 ' />
  <p className='text-[13px] ' >WOMEN'S COMPETITION PACK 150kg + bar</p>
  <p className='pt-2' ><b>€654.17</b> </p>
</div> 
 

        </div>
    </div>
  )
}

