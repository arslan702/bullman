import Image from 'next/image'
import React from 'react'
import img from '../../../Images/1.jpg'
import img1 from '../../../Images/2.jpg'
import img2 from '../../../Images/3.jpg'
import img3 from '../../../Images/4.jpg'
import img4 from '../../../Images/5.jpg'
import img5 from '../../../Images/6.jpg'
import img6 from '../../../Images/7.jpg'
import img7 from '../../../Images/8.jpg'



export default function Category() {
  return (
    <div className='md:px-12 pt-10 ' >
<p className="pb-[0.1px]  border-b-[2px] max-w-72 border-black text-[20px]  "> <b>ACHETEZ PAR CATÉGORIES</b> </p>
<br />
<div className='grid md:grid-cols-4 md:px-0 px-8 ' >
<div className='text-center font-[700] ' >
  <Image src={img} />
  <p>FORCE & HALTÉRO</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img1} />
  <p>PRÉPARATION PHYSIQUE</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img2} />
  <p>GYMNASTIQUE</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img3} />
  <p>RIGS & RACKS</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img4} />
  <p>DISQUES</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img5} />
  <p>BARRES</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img6} />
  <p>HOMEGYM</p>
</div>
<div className='text-center font-[700] ' >
  <Image src={img7} />
  <p>PACKS</p>
</div>

</div>
    </div>
  )
}
