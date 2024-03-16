
 "use client"
import React from 'react';

function VideoComponent() {
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video loop muted autoPlay style={{ width: '100%', height: '100%' }}>
        <source src="/Video/video.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
    {/* <p className='text-[30px] font-[600] ' >Prix justes at Accesibles </p> */}

      </div>
    </div>
  );
}

export default VideoComponent;
