import React from 'react';
import Video from '/videos/video.mp4'; // Replace with your video path
import Adventure from '../components/Sections/Adventure';
import TouchWithUs from '../components/Sections/TouchWithUs';

function AboutUs() {
  return (
    <div>

    <div className="relative h-screen flex items-center justify-center text-white">
      <video
        src={Video}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We are Grand Tour World Class Travel Agency
        </h1>
        <p className="text-lg md:text-xl">
          Trips, experiences, and places. All in one service.
        </p>
      </div>
    
    </div>
    <Adventure/>
    <TouchWithUs/>
    </div>
  );
}

export default AboutUs;