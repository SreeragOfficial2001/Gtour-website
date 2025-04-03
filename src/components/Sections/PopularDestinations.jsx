import React from "react";
import { useLocation } from "react-router-dom";


function PopularDestinations({data}) {
  const currentLocation = useLocation().pathname;
  
  
  return (
    <div className="text-center p-6">
      {
        currentLocation !== '/destinations' && <h2 className="text-3xl font-bold">Popular Destinations</h2>
      }
      {
        currentLocation !== '/destinations' &&  <p className="text-gray-500">World's best tourist destinations</p>
      }
      
     

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data?.map((destination, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={destination?.image}
              alt={destination?.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full bg-opacity-50 text-white text-lg font-semibold p-2">
              {destination?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PopularDestinations;
