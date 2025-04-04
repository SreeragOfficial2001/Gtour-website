import React from 'react'
import PopularDestinations from '../components/Sections/PopularDestinations'

import tokyoImage from "../assets/tokyo.jpg";
import Paris from "../assets/paris.jpg";
import London from "../assets/london.jpg";
import Seoul from "../assets/seoul1.jpg";


const Packages = () => {
     const destinations = [
            { name: "Tokyo", image: tokyoImage },
            { name: "Seoul", image: Seoul },
            { name: "Paris", image: Paris },
            { name: "London", image: London },
          ];
  return (
    <div>
    <div className="relative">
           <img
             src={tokyoImage}
             alt="Destination Banner"
             className="w-full h-[400px] object-cover"
           />
           <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
             <h1 className="text-4xl font-bold mb-2">Destination FullWidth</h1>
             <p className="text-lg">This is sample of page tagline and you can set it up using page option</p>
           </div>
         </div>
         <PopularDestinations data={destinations} />
</div>
  )
}

export default Packages