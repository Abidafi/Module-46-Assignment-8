import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          <div className="flex justify-center sm:justify-start items-center gap-2 sm:col-span-2 lg:col-span-1">
            <img 
            className="w-7 h-7 sm:w-8 sm:h-8" 
            src="/logo-hero-IO.png" 
            alt="" />
            <h3 className="text-white font-semibold text-lg sm:text-xl">
               HERO:IO 
            </h3>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-sm">Company</h4>
            <ul className="space-y-2 sm:space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Mission</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact Sales</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-sm">Services</h4>
            <ul className="space-y-2 sm:space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Products & Services</li>
              <li className="hover:text-white cursor-pointer transition-colors">Customer Stories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Download Apps</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-sm">Information</h4>
            <ul className="space-y-2 sm:space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer transition-colors">Join Us</li>
            </ul>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 text-base sm:text-sm">Social Links</h4>
            <ul className="space-y-3 sm:space-y-2 text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer transition-colors"><img src="/x.png" className="w-4 h-4" alt="" /><span>HERO.IO</span></li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer transition-colors"><img src="/linkedin.png" className="w-4 h-4" alt="" /><span>HERO.IO</span></li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer transition-colors"><img src="/facebook.png" className="w-4 h-4" alt="" /><span>HERO.IO</span></li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer transition-colors"><img src="/mail.png" className="w-4 h-4" alt="" /><span>support@hero.com</span></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white text-xs sm:text-sm mt-8 md:mt-10 pt-6 border-t border-gray-700">
          Copyright © 2025 - All right reserved
        </div>
    </footer>
    );
};

export default Footer;

