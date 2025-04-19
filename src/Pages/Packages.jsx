import React, { useEffect, useState } from "react";
import Prague from "../assets/prague.jpg";
import nomandImage from "../assets/nomand1.jpg";
import frenchAutumnImage from "../assets/french-autumn.jpg";
import grandSwitzerlandImage from "../assets/grandswitzerland.jpg";
import Trip1 from "../assets/Trip1.jpg";
import backwater from "../assets/backwater.jpg";
import folk from "../assets/folk.jpg";
import kerala from "../assets/keral.jpg";
import tiger from "../assets/tiger.jpg";
import Trip2 from "../assets/Trip2.jpg";
import coorg from "../assets/coorg.jpg";
import nelliyampathy from "../assets/Nelliampathy.jpg";
import wayanad from "../assets/wayanad.jpg";

import PackageDetails from "../components/Sections/PackageDetails";
import PackageCarousel from "../components/Sections/PackageCarousel";

const bannerImages = [folk, backwater, kerala, tiger];

const carouselImages1 = [folk, backwater, kerala, tiger, Trip1, Trip2];

const carouselImages2 = [
  coorg,
  nelliyampathy,
  wayanad,
  Prague,
  nomandImage,
  frenchAutumnImage,
  grandSwitzerlandImage,
];

const Packages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="relative">
        <img
          src={bannerImages[currentImageIndex]}
          alt="Destination Banner"
          className="w-full h-[400px] object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center ">
          <h1 className="text-4xl font-bold mb-2">Travel Tour</h1>
          <p className="text-lg">
           A tour package can include any combination of tours or services
          </p>
        </div>
      </div>

      <PackageDetails />

      <PackageCarousel
        images={carouselImages1}
        title="Top Picks in Kerala"
        description="Experience the vibrant culture, lush greenery, and serene backwaters of Kerala with our handpicked packages."
      />

      <br />

      <PackageCarousel
        images={carouselImages2}
        title="International & Hill Station Escapes"
        description="Explore the beauty of Europe and the charm of South Indian hill stations through our exclusive travel packages."
      />

      <br />
    </div>
  );
};

export default Packages;
