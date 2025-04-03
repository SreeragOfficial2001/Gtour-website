import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Here are reasons you should plan trip with us
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Handpicked Hotels
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-3.28a1 1 0 01-.439-.886l-4.12-8.242A.768 768 0 005.5 5H5a2 2 0 00-2 2v1a2 2 0 002 2h1a2 2 0 012 2v3.28a1 1 0 01-.439.886l-4.12 8.242A.768 768 0 005.5 19H5a2 2 0 00-2-2v-1a2 2 0 002-2h1a2 2 0 012-2V11z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              World Class Service
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              Best Price Guarantee
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
