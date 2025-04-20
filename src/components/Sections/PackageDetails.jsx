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
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex flex-col lg:flex-row bg-gray-100 p-4 sm:p-6 rounded-md shadow-md space-y-6 lg:space-y-0 lg:space-x-6"
        variants={fadeIn}
      >
        {/* Left Column */}
        <motion.div className="lg:w-2/3" variants={slideInFromLeft}>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            11 Days European Pathways Community Trip - France, Netherlands, Germany, Czechia
          </h2>

          <div className="flex flex-wrap gap-4 mb-4">
            <motion.div className="bg-white p-3 rounded-md shadow-sm w-full sm:w-auto flex-1" whileHover={{ scale: 1.05 }} variants={fadeIn}>
              <p className="text-sm text-gray-600">Pickup & Drop</p>
              <p className="text-sm font-semibold text-gray-700">Paris Airport - Prague Airport</p>
            </motion.div>
            <motion.div className="bg-white p-3 rounded-md shadow-sm w-full sm:w-auto flex-1" whileHover={{ scale: 1.05 }} variants={fadeIn}>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-sm font-semibold text-gray-700">10N - 11D</p>
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-gray-200 mb-4 text-sm sm:text-base">
            {["Overview & Highlights", "Itinerary", "Inclusions", "Exclusions", "Other Info"].map((label, i) => (
              <button
                key={i}
                className={`py-2 px-3 text-gray-600 hover:text-blue-500 focus:outline-none ${i === 0 ? "text-blue-500 font-semibold" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Overview */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Overview & Highlights</h3>
            <p className="text-gray-600 mb-2">3N Paris - 3N Amsterdam - 2N Berlin - 2N Prague</p>
            <p className="text-gray-600 text-sm">
              Join us as we take you to some of the dreamiest places in the world...
              <button className="text-blue-500 text-sm ml-1">Read More</button>
            </p>
          </motion.div>

          {/* Itinerary */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm mt-4" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Itinerary</h3>
            <div className="space-y-2">
              <div className="border border-gray-200 rounded-md p-3 text-sm">
                <h4 className="font-semibold text-gray-700 mb-1">Day 1: Arrive in Paris</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Arrival and immigration formalities.</li>
                  <li>Warm welcome from our Tour Manager.</li>
                  <li>Check-in to hostel and leisure time.</li>
                  <li>Overnight stay in Paris.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Notes */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm mt-4" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>Rates not valid during Diwali, Dussehra, Christmas & New Year.</li>
            </ul>
          </motion.div>

          {/* Inclusions */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm mt-4" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Inclusions</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>3 nights’ hostel stay with breakfast in Paris.</li>
            </ul>
          </motion.div>

          {/* Exclusions */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm mt-4" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Exclusions</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>Flight tickets.</li>
            </ul>
          </motion.div>

          {/* Other Info */}
          <motion.div className="bg-white p-4 rounded-md shadow-sm mt-4" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Other Info</h3>
            <p className="text-gray-600 text-sm mb-1">Itinerary subject to change.</p>
            <p className="text-gray-600 text-sm">Ensure valid documents and visa.</p>
          </motion.div>
        </motion.div>

        {/* Right Column - Pricing & Contact */}
        <motion.div className="lg:w-1/3" variants={slideInFromRight}>
          <div className="sticky top-4">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-xl font-semibold text-indigo-600 mb-4">
                ₹1,49,990/- <span className="text-sm text-gray-500">per person</span>
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mb-4">
                Dates & Costing
              </button>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Wanderlust Calling!</h4>
                <p className="text-xs text-gray-600 mb-3">Allow Us to Call You Back!</p>
                <form>
                  {["Full Name", "Phone No.", "Email ID"].map((label, i) => (
                    <div className="mb-2" key={i}>
                      <label className="block text-gray-700 text-xs font-bold mb-1">
                        {label} *
                      </label>
                      <input
                        type={label.includes("Email") ? "email" : label.includes("Phone") ? "tel" : "text"}
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 text-xs focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  ))}
                  <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-md w-full mt-2">
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
