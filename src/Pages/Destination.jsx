import React from 'react';
import PopularDestinations from '../components/Sections/PopularDestinations';
import tokyoImage from "../assets/tokyo.jpg";
import Paris from "../assets/paris.jpg";
import London from "../assets/london.jpg";
import Seoul from "../assets/seoul1.jpg";
import Venice from "../assets/venice.jpg";
import Kyoto from "../assets/kyoto.jpg";
import HongKong from "../assets/hong.jpg";
import California from "../assets/california.jpg";
import Rome from "../assets/rome.jpg";
import Miami from "../assets/miami1.jpg";
import Prague from "../assets/prague.jpg";
import Santorini from "../assets/santorini.jpg";

const Destination = () => {
  const destinations = [
    { name: "Tokyo", image: tokyoImage },
    { name: "Seoul", image: Seoul },
    { name: "Paris", image: Paris },
    { name: "London", image: London },
    { name: "Venice", image: Venice },
    { name: "Miami", image: Miami },
    { name: "Rome", image: Rome },
    { name: "California", image: California },
    { name: "Kyoto", image: Kyoto },
    { name: "Hong Kong", image: HongKong },
    { name: "Prague", image: Prague },
    { name: "Santorini", image: Santorini },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <img
          src={London} // Replace with your desired banner image
          alt="Destination Banner"
          className="w-full h-[400px] object-cover" // Adjust height as needed
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Destination Fullwidth</h1>
          <p className="text-lg">This is sample of page tagline and you can set it up using page option</p>
        </div>
      </div>

      <PopularDestinations data={destinations} />
    </div>
  );
};

export default Destination;