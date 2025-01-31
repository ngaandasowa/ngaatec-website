import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Footer = () => {

  return (
    <footer className="bg-black text-white">
      
      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
          {/* Company Info */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">
              Ngaatec
            </h2>
            <p className="text-sm mr-2">
              We deliver innovative tech solutions, empowering businesses with IT services, web development, and security systems.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61558544541726" className="hover:text-[#0064FE]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/ngaatec/" className="hover:text-[#0064FE]">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/91177843" className="hover:text-[#0064FE]">
                <FaLinkedin size={24} />
              </a>
                <a href="https://x.com/ngaatec" className="hover:text-[#0064FE]">
                <FaXTwitter size={24} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline hover:text-[#0064FE]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline hover:text-[#0064FE]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/company-documents" className="hover:underline hover:text-[#0064FE]">
                  Company Documents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300 mx-4 md:mx-8">
        <div className="text-center py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ngaatec Private Limited. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
