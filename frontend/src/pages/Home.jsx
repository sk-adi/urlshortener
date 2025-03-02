import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-600 p-6">
      <div className="max-w-5xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Tired of Sharing Long Links?  
            <br />
            <span className="text-yellow-300">Shorten them instantly!</span>
          </h1>
          <NavLink to="/register">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-md transition-all cursor-pointer">
              Start for Free
            </button>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter long link here..."
          />
          <input
            className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed"
            type="text"
            placeholder="Shortened link will appear here..."
            readOnly
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all cursor-pointer">
            Shorten URL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
