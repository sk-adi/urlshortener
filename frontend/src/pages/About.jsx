import React from "react";
import { Github } from "lucide-react"; // Icon

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="max-w-3xl text-center text-white space-y-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          About <span className="text-blue-400">Our URL Shortener</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300">
          This URL shortener allows you to convert long, complex links into short, easy-to-share URLs. 
          Built with **React, Tailwind CSS**, and **Node.js**, it provides a seamless experience for 
          creating and managing short links.
        </p>

        {/* GitHub Button */}
        <a 
          href="https://github.com/sk-adi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md"
        >
          <Github size={24} />
          Check My Projects
        </a>

      </div>
    </div>
  );
}

export default About;
