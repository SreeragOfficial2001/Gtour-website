import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

const PackageCarousel = ({ images, title, description }) => {
  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{title}</h2>
        {description && (
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600">{description}</p>
        )}
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img
                src={image}
                alt={`Panorama Image ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PackageCarousel;
