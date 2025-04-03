
import React from "react";
import frenchAutumnImage from "../../assets/french-autumn.jpg";
import grandSwitzerlandImage from "../../assets/grandswitzerland.jpg";
import japanImage from "../../assets/japan.jpg";

const BestValueTrips = () => {
  const trips = [
    {
      title: "French Autumn",
      price: "$5,000",
      originalPrice: "$6,000",
      image: frenchAutumnImage,
      details: "City Tours, Urban",
      reviews: 4,
      days: 5,
    },
    {
      title: "Grand Switzerland",
      price: "$6,000",
      originalPrice: "$7,500",
      image: grandSwitzerlandImage,
      details: "Shopping, Mountain, Snow & Ice",
      reviews: 4,
      days: 6,
    },
    {
      title: "Discover Japan",
      price: "$2,500",
      originalPrice: "$3,000",
      image: japanImage,
      details: "City Tours, Iconic",
      reviews: 4,
      days: 5,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Best Value Trips</h2>
        <p className="text-gray-500">Best offers trips from us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{trip.title}</span>
                <span className="text-sm line-through text-gray-500">
                  {trip.originalPrice}
                </span>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {trip.price}
              </span>
              <p className="text-sm text-gray-600">{trip.details}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  {[...Array(trip.reviews)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.505L.23 7.69l6.54-1.13L10 1l3.23 5.56 6.54 1.13-4.87 4.895 1.123 6.51z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    {trip.reviews} reviews
                  </span>
                </div>
                <span className="text-sm text-gray-500">{trip.days} days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestValueTrips;
