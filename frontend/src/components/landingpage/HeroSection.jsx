import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-100 py-16 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
      {/* left text content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover stores around you — <br />
          <span className="text-teal-600">Shop smart, shop direct</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {" "}
          Support small businesses, shop from curated local stores.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-teal-600 text-white 
             rounded-2xl shadow-md hover:bg-teal-700 transition duration-300"
        >
          Explore Stores
        </button>
      </div>
      {/* right text content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
        src="https://media.istockphoto.com/id/1413204314/photo/happy-man-at-supermarket-store.jpg?s=612x612&w=0&k=20&c=Dn5UI46Z6UmBx2n9kYg56jObHBYoQtxcLjS5ukEuXCE="
           alt="Marketplace Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
