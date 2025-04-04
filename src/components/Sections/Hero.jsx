import React from "react";
import TypingTextAnimation from "../TypingTextAnimation";


const Hero = () => {
 
  
  const words = ['Creating memories','Spreading memories','Creating stories']
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold animate-fadeIn">
          Global Community for Travelers
        </h1>
    
        <TypingTextAnimation words={words}/>
      </div>
    </div>
  );
};

export default Hero;
