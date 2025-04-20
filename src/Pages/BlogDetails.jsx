import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import wayanad from "../assets/wayanad.jpg";
import london from "../assets/london.jpg";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postImage = queryParams.get("image");
  const postTitle = queryParams.get("title");

  const recentPosts = [
    { id: 1, date: 22, title: "Land of Love and La Dolce Vita", image: "" },
    { id: 2, date: 19, title: "Cradle of Western Civilization", image: "" },
    { id: 3, date: 31, title: "Land of Smiles and Serenity", image: "" },
    { id: 4, date: 28, title: "Adventures in the Americas", image: "" },
    { id: 5, date: 11, title: "Cultural Immersiony", image: "" },
  ];

  const blogContent =
    "Step into ancient history, island-hop through the Cyclades, and enjoy vibrant nightlife. Explore ruins, beaches, and delicious Mediterranean cuisine. This is a more detailed explanation of the blog post content. You can add multiple paragraphs and format the text as needed. Include details about the history, culture, and attractions of the destination.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Banner */}
      <div className="relative">
        <img
          src={postImage || london}
          alt={postTitle || "Destination Banner"}
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {postTitle || "Destination Fullwidth"}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            This is a sample page tagline. You can set it up using the page
            option.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/3 flex justify-center"
          >
            <motion.div
              className="rounded-md shadow-sm overflow-hidden w-full"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              <img
                src={postImage || wayanad}
                alt={postTitle || "Blog Post Image"}
                className="w-full max-h-[400px] object-cover"
              />
              <div className="p-4 sm:p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {postTitle || "Default Blog Title"}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  {blogContent}
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  More detailed content can go here. You can break it into
                  multiple paragraphs. Add relevant information and engaging
                  details about the topic.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="bg-gray-100 rounded-lg p-6 shadow-md w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Posts
              </h2>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex items-center">
                    <div className="bg-indigo-500 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center mr-3">
                      {post.date}
                    </div>
                    <Link
                      to={`/blog/${post.id}?title=${post.title}&image=${
                        post.image || london
                      }`}
                      className="text-gray-700 hover:text-indigo-600 text-sm sm:text-base"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
