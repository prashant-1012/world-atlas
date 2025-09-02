import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-16 py-16 gap-12">
        
        {/* Left Text Section */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-snug">
            Explore the World,{" "}
            <span className="text-blue-400">One Country at a Time.</span>
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Discover the history, culture, and beauty of every nation. 
            Sort, search, and filter through countries to find the details 
            you need.
          </p>

          {/* CTA Button */}
          <NavLink to="/country">
          <button
            type="button"
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 
                       rounded-lg font-medium shadow-lg
                       hover:bg-blue-600 hover:shadow-blue-500/30 
                       transition transform hover:scale-105"
          >
            Start Exploring <FaLongArrowAltRight />
          </button>
          </NavLink>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            className="w-[700px] lg:w-[850px] rounded-xl shadow-2xl shadow-blue-900/40"
            src="/images/world-new.png"
            alt="world monuments"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
