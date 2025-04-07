import React from "react";
import BlogImage from "../../assets/blog.jpg";
import Memorial from "../../assets/memorable.jpg";
import nomandImage from "../../assets/nomand1.jpg";

const Articles = () => {
  const articles = [
    {
      title: "Memorial Day to Someone Told Me to Travel",
      date: "DECEMBER 10, 2016",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
      imageUrl: Memorial,
    },
    {
      title: "7 Tips For Nomads On A Budget Trips",
      date: "DECEMBER 10, 2016",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
      imageUrl: nomandImage,
    },
    {
      title: "Taking A Travel Blog Victory Lap",
      date: "DECEMBER 10, 2016",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
      imageUrl: BlogImage,
    },
  ];

  return (
    <div className="px-4 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Articles & Tips</h2>
        <p className="text-center text-gray-600 mb-8">
          Explore some of the best tips from around the world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-600 mb-2">{article.date}</p>
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                  {article.description}
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
