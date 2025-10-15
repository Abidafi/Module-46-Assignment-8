import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-8 py-12 ">
        <div className="grid md:grid-cols-5 gap-8 w-11/12 mx-auto">
          <div className="flex justify-center gap-0.5">
            <img className="w-[30px] h-[30px]" src="/logo-hero-IO.png" alt="" />
            <h3 className="text-white font-semibold mb-2">
               HERO:IO 
            </h3>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-1"><img src="/x.png" className="gap-1" alt="" />HERO.IO</li>
              <li className="flex items-center gap-1"><img src="/linkedin.png" className="gap-1" alt="" />HERO.IO</li>
              <li className="flex items-center gap-1"><img src="/facebook.png" className="gap-1" alt="" />HERO.IO</li>
              <li className="flex items-center gap-1"><img src="/mail.png" className="gap-1" alt="" />support@hero.com</li>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-white text-sm mt-8">
          Copyright © 2025 - All right reserved
        </div>
    </footer>
    );
};

export default Footer;

