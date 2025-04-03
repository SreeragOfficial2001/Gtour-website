import React from "react";
import awards from "../../assets/awards.jpg";
import Trip1 from "../../assets/Trip1.jpg";
import Trip2 from "../../assets/Trip2.jpg";
import Trip3 from "../../assets/Trip3.jpg";
import Trip4 from "../../assets/Trip4.jpg";
import Trip5 from "../../assets/Trip5.jpg";
import Trip6 from "../../assets/Trip6.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Awards</h3>
          <p className="text-sm mb-4">
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <div className="flex space-x-4">
            <img src={awards} alt="Award 1" className="h-16" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p className="text-sm mb-2">1-567-124-44227</p>
          <p className="text-sm mb-2">184 Main Street East Perl Habour 8007</p>
          <p className="text-sm mb-4">Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-red-500 hover:text-red-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Trips</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src={Trip1}
              alt="Trip 1"
              className="h-20 w-full object-cover"
            />
            <img
              src={Trip2}
              alt="Trip 2"
              className="h-20 w-full object-cover"
            />
            <img
              src={Trip3}
              alt="Trip 3"
              className="h-20 w-full object-cover"
            />
            <img
              src={Trip4}
              alt="Trip 4"
              className="h-20 w-full object-cover"
            />
            <img
              src={Trip5}
              alt="Trip 5"
              className="h-20 w-full object-cover"
            />
            <img
              src={Trip6}
              alt="Trip 6"
              className="h-20 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">© Copyright GTour Template Demo</p>
        <div className="mt-2">
          <a href="#" className="text-sm mx-2 hover:underline">
            Home
          </a>
          <a href="#" className="text-sm mx-2 hover:underline">
            Tours
          </a>
          <a href="#" className="text-sm mx-2 hover:underline">
            Blog
          </a>
          <a href="#" className="text-sm mx-2 hover:underline">
            Purchase Template
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
