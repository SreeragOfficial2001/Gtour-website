import React from "react";
import { motion } from "framer-motion"; 

function PackageDetails() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const slideInFromRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="container mx-auto px-4"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-md shadow-md"
        variants={fadeIn}
      >
        <motion.div
          className="md:w-2/3 pr-4"
          variants={slideInFromLeft}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11 Days European Pathways Community Trip - France, Netherlands,
            Germany, Czechia
          </h2>
          <div className="flex space-x-4 mb-4">
            <motion.div
              className="bg-white p-2 rounded-md shadow-sm"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn}
            >
              <p className="text-sm text-gray-600">Pickup & Drop</p>
              <p className="text-sm font-semibold text-gray-700">
                Paris Airport - Prague Airport
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-2 rounded-md shadow-sm"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn}
            >
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-sm font-semibold text-gray-700">10N - 11D</p>
            </motion.div>
          </div>

          <div className="flex border-b border-gray-200 mb-4">
            <button
              className="py-2 px-4 text-blue-500 font-semibold focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Overview & Highlights
            </button>
            <button
              className="py-2 px-4 text-gray-600 hover:text-blue-500 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Itinerary
            </button>
            <button
              className="py-2 px-4 text-gray-600 hover:text-blue-500 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Inclusions
            </button>
            <button
              className="py-2 px-4 text-gray-600 hover:text-blue-500 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Exclusions
            </button>
            <button
              className="py-2 px-4 text-gray-600 hover:text-blue-500 focus:outline-none"
              whileHover={{ scale: 1.1 }}
            >
              Other Info
            </button>
          </div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Overview & Highlights
            </h3>
            <p className="text-gray-600 mb-2">
              3N Paris - 3N Amsterdam - 2N Berlin - 2N Prague
            </p>
            <p className="text-gray-600">
              Join us as we take you to some of the dreamiest places in the
              world! We are talking about our amazing Backpacking Trip to
              Europe, covering Czechia, Germany, the Netherlands, and France in
              11 days! This unforgettable adventure offers the perfect blend of
              guided tours and leisure time, ensuring you experience the best of
              each destination. Explore iconic cities with hop-on-hop-off bus
              tours, giving you a brief look at landmarks like the...
              <button className="text-blue-500 text-sm focus:outline-none">
                Read More
              </button>
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm mt-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Itinerary
            </h3>
            <div className="space-y-2">
              <div className="border border-gray-200 rounded-md p-3">
                <h4 className="text-sm font-semibold text-gray-700">
                  Day 1: Arrive in Paris, Welcome to Europe.
                </h4>
                <ul className="list-disc pl-5 text-gray-600 text-sm">
                  <li>
                    Upon your arrival in Paris, complete the immigration
                    formalities at the airport.
                  </li>
                  <li>
                    Get a warm welcome from our Tour Manager, who will guide you
                    to your hostel and help you with the check-in formalities.
                  </li>
                  <li>
                    Have some rest and spend the rest of the day at leisure in
                    this beautiful city known for its exceptional fashion,
                    renowned museums, breathtaking landmarks, and captivating
                    cabaret shows.
                  </li>
                  <li>Overnight stay in Paris.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm mt-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Important Notes
            </h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>
                Rates are not valid for festival duration like Diwali, Dussehra,
                Christmas and New Year.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm mt-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Inclusions
            </h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>
                3 nights' hostel mixed dorm accommodation with breakfast in
                Paris.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm mt-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Exclusions
            </h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
              <li>Flight tickets.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-4 rounded-md shadow-sm mt-4"
            variants={fadeIn}
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Other Info
            </h3>
            <p className="text-gray-600 text-sm mb-2">
              Please note that the itinerary is subject to change based on various
              factors.
            </p>
            <p className="text-gray-600 text-sm">
              Ensure you have valid travel documents and necessary visas.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/3 pl-4"
          variants={slideInFromRight}
        >
          <div className="sticky top-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-xl font-semibold text-indigo-600 mb-4">
                ₹1,49,990/- <span className="text-gray-500 text-sm">per person</span>
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mb-4 focus:outline-none"
                whileHover={{ scale: 1.05 }}
              >
                Dates & Costing
              </button>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Wanderlust Calling!
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  Allow Us to Call You Back!
                </p>
                <form>
                  <div className="mb-2">
                    <label
                      htmlFor="fullName"
                      className="block text-gray-700 text-xs font-bold mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs border-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 text-xs font-bold mb-1"
                    >
                      Phone No. *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs border-none"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-xs font-bold mb-1"
                    >
                      Email ID *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs border-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-700 text-gray-800 font-bold py-2 px-4 rounded-md w-full focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PackageDetails;