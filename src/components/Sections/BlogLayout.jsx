import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Trip1 from "../../assets/Trip1.jpg";
import Trip2 from "../../assets/Trip2.jpg";
import Trip3 from "../../assets/Trip3.jpg";
import Trip4 from "../../assets/Trip4.jpg";
import Trip5 from "../../assets/Trip5.jpg";
import Trip6 from "../../assets/Trip6.jpg";

const BlogLayout = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Mastering Business Etiquette for Global Success",
      date: "22 Nov",
      imageUrl: Trip1,
      content: (
        <div>
          <h2>Mastering Business Etiquette for Global Success</h2>
          <p>This is the detailed content for the "Mastering Business Etiquette for Global Success" blog post.</p>
          <p>You can add more paragraphs, images, and other elements here to create the full blog post content.</p>

        </div>
      ),
    },
    {
      id: 2,
      title: "The Power of Executive Presence: How to Command Respect in the Workplace",
      date: "19 Nov",
      imageUrl: Trip2,
      content: (
        <div>
          <h2>The Power of Executive Presence: How to Command Respect in the Workplace</h2>
          <p>Detailed content for "The Power of Executive Presence: How to Command Respect in the Workplace".</p>

        </div>
      ),
    },
    {
      id: 3,
      title: "Envelop Yourself with Women Who Want To See You Win",
      date: "31 Oct",
      imageUrl: Trip3,
      content: (
        <div>
          <h2>Envelop Yourself with Women Who Want To See You Win</h2>
          <p>Detailed content for "Envelop Yourself with Women Who Want To See You Win".</p>

        </div>
      ),
    },
    {
      id: 4,
      title: "Why We Miss Deadlines and How to Stop Doing It",
      date: "28 Oct",
      imageUrl: Trip4,
      content: (
        <div>
          <h2>Why We Miss Deadlines and How to Stop Doing It</h2>
          <p>Detailed content for "Why We Miss Deadlines and How to Stop Doing It".</p>

        </div>
      ),
    },
    {
      id: 5,
      title: "Prioritizing Mental Health in the Workplace",
      date: "27 Oct",
      imageUrl: Trip5,
      content: (
        <div>
          <h2>Prioritizing Mental Health in the Workplace</h2>
          <p>Detailed content for "Prioritizing Mental Health in the Workplace".</p>

        </div>
      ),
    },
    {
      id: 6,
      title: "How to find what you really want to do",
      date: "20 Oct",
      imageUrl: Trip6,
      content: (
        <div>
          <h2>How to find what you really want to do</h2>
          <p>Detailed content for "How to find what you really want to do".</p>

        </div>
      ),
    },
  ];

  const handleCardClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          onClick={() => handleCardClick(post.id)}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ delay: index * 0.1 }} 
        >
          <div className="relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 bg-blue-500 text-white rounded-md px-2 py-1">
              {post.date}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <span className="text-blue-600 hover:underline text-sm">
              Read More
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogLayout;