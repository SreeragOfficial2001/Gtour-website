import React from "react";
import Memorial from "../../assets/memorable.jpg";
import nomandImage from "../../assets/nomand1.jpg";
import frenchAutumnImage from "../../assets/french-autumn.jpg";
import grandSwitzerlandImage from "../../assets/grandswitzerland.jpg";
import Prague from "../../assets/prague.jpg";
import Tokyo from "../../assets/tokyo.jpg";
import Seoul from "../../assets/seoul1.jpg";
import Paris from "../../assets/paris.jpg";
import japanImage from "../../assets/japan.jpg";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa';


const TravelTipsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Travel Tips</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4">
          <img
            src={Memorial} 
            alt="Memorial Day Travel"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <a href="#" className="text-gray-800 font-semibold hover:underline">
              Memorial Day to Someone Told Me to Travel
            </a>
            <p className="text-gray-500 text-sm">December 10, 2016</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img
            src={nomandImage} 
            alt="Nomad Budget Tips"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <a href="#" className="text-gray-800 font-semibold hover:underline">
              7 Tips For Nomads On A Budget Trips
            </a>
            <p className="text-gray-500 text-sm">December 10, 2016</p>
          </div>
        </li>
        <li className="flex items-center space-x-4">
          <img
            src={frenchAutumnImage}
            alt="Travel Blog Victory Lap"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <a href="#" className="text-gray-800 font-semibold hover:underline">
              Taking A Travel Blog Victory Lap
            </a>
            <p className="text-gray-500 text-sm">December 10, 2016</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

const FlickrCard = () => {
  const flickrImages = [
    frenchAutumnImage,
    Memorial,
    japanImage,
    nomandImage,
    grandSwitzerlandImage,
    Prague,
    Tokyo,
    Seoul,
    Paris,
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Flickr</h3>
      <div className="grid grid-cols-3 gap-2">
        {flickrImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className="w-full h-24 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

const BlogLayout = () => {
  return (
    <div className="bg-gray-100 py-8 w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 min-h-screen">
          <div className="md:w-2/3">
            <BlogContent />
          </div>

          <aside className="md:w-1/3 space-y-6 md:sticky md:top-8 self-start md:max-h-screen md:overflow-auto">
            <NewsletterSignup />
            <TravelTipsCard />
            <FlickrCard />
            <ConnectWithUs />

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={japanImage}
                  alt="5 Lake of Fuji San"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-500 text-white text-sm font-semibold rounded-md px-2 py-1 mr-2">
                      $4,900
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      $4,200
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    5 Lake of Fuji San
                  </h4>
                  <div className="flex items-center">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.26 6.545 6.19 10 0l3.455 6.19 5.958 1.07-4.705 4.245L15.878 18.09z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-gray-300 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.26 6.545 6.19 10 0l3.455 6.19 5.958 1.07-4.705 4.245L15.878 18.09z" />
                    </svg>
                  </div>
                </div>
              </div>

              
              <div className="bg-white rounded-lg shadow-md">
                <img
                  src={grandSwitzerlandImage}
                  alt="Grand Switzerland"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-red-500 text-white text-sm font-semibold rounded-md px-2 py-1">
                      $6,000
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Grand Switzerland
                  </h4>
                  <div className="flex items-center">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-blue-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.26 6.545 6.19 10 0l3.455 6.19 5.958 1.07-4.705 4.245L15.878 18.09z" />
                      </svg>
                    ))}
                    <svg
                      className="w-4 h-4 text-gray-300 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.176-6.545L.587 7.26 6.545 6.19 10 0l3.455 6.19 5.958 1.07-4.705 4.245L15.878 18.09z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const BlogContent = () => {
  return (
    <div className="space-y-6">
      <BlogPost
        image={frenchAutumnImage}
        title="Memories May Be Someone Told Me to Travel"
        date="April 11, 2025"
        author="John Doe"
        excerpt="This is an example of a blog post excerpt. You can include a brief summary of your article here. Add more content as needed."
      />

      <BlogPost
        image={grandSwitzerlandImage}
        title="Memories May Be Someone Told Me to Travel"
        date="April 10, 2025"
        author="Jane Smith"
        excerpt="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life."
      />
      <BlogPost
        image={japanImage}
        title="Memories May Be Someone Told Me to Travel"
        date="April 10, 2025"
        author="Jane Smith"
        excerpt="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life."
      />
      <BlogPost
        image={grandSwitzerlandImage}
        title="Memories May Be Someone Told Me to Travel"
        date="April 10, 2025"
        author="Jane Smith"
        excerpt="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life."
      />
      <BlogPost
        image={Memorial}
        title="Memories May Be Someone Told Me to Travel"
        date="April 10, 2025"
        author="Jane Smith"
        excerpt="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life."
      />
    </div>
  );
};

const BlogPost = ({ image, title, date, author, excerpt }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-96 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700 leading-snug text-base mb-3 flex-grow">
          {excerpt}
        </p>
        <a
          href="#"
          className="text-blue-500 hover:underline mt-auto inline-block text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const NewsletterSignup = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Newsletter</h3>
      <p className="text-gray-600 text-sm mb-2">
        Don't miss a thing! Sign up to receive daily deals
      </p>
      <div className="mt-2">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

const ConnectWithUs = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Connect With Us
        </h3>
        <div className="flex space-x-3">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <FaFacebookF className="text-sm" />
          </a>
          <a
            href="#"
            className="bg-sky-500 hover:bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <FaTwitter className="text-sm" />
          </a>
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <FaYoutube className="text-sm" />
          </a>
          <a
            href="#"
            className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <FaPinterest className="text-sm" />
          </a>
          <a
            href="#"
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            <FaInstagram className="text-sm" />
          </a>
        </div>
      </div>
    );
  };
  
  
  
  

export default BlogLayout;
