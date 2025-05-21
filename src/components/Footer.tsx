import React from "react";
import { Scroll } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-200 py-12 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-amber-600 p-2 rounded-full mr-3">
              <Scroll size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Tavern</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Beta
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Taverna. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-200 hover:text-[#ffd700] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
