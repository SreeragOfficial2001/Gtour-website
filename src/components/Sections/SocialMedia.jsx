import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'; // Install react-icons

const SocialMedia = () => {
  return (
    <div className="min-h-24 flex flex-col justify-center items-center bg-white">
      <p className="text-center mb-4 font-bold">
        Just over a month into my trip and I wonder how I've changed, if at all. Certainly
        the experiences I've had and things I've seen have shaped me in some way.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <a href="#" className="text-blue-600 hover:text-blue-700">
          <FaFacebookF size={30} />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500">
          <FaTwitter size={30} />
        </a>
        <a href="#" className="text-red-600 hover:text-red-700">
          <FaYoutube size={30} />
        </a>
        <a href="#" className="text-red-500 hover:text-red-600">
          <FaPinterest size={30} />
        </a>
        <a href="#" className="text-purple-600 hover:text-purple-700">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
