import React from "react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"; // Icons

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Copyright */}
        <div className="text-lg font-medium">
          © {new Date().getFullYear()} URL Shortener. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
            <Twitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
