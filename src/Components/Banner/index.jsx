import Image from 'next/image';
import React from 'react';
import img from '../../../Images/gym.webp'


export default function Banner() {
  return (
      <div>
    {/* <video class="h-full w-full rounded-lg  "  autoplay muted >
    <source
      src="https://www.pexels.com/video/a-man-lifting-weights-in-a-fitness-gym-3196220/"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video> */}
<Image src={img} className='h-screen w-full ' />
  </div>

  );
}
