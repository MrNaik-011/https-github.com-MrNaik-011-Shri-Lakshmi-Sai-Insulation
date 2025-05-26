
import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3550A3] text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile accordion-style footer */}
        <div className="block sm:hidden">
          <div className="space-y-6">
            {/* Company Info - Always visible on mobile */}
            <div className="flex flex-col items-center border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#F9EFC7] p-2 rounded-lg">
                  <Factory className="h-6 w-6 text-black" />
                </div>
                <div className="font-bold text-lg text-center">
                  SHRI LAKSHMI<br />SAI INSULATION
                </div>
              </div>
              <p className="text-gray-100 mb-4 text-center text-sm">
                Industrial & Commercial Insulation Experts since 2012
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-[#F9EFC7]">
                  10+ Years Experience
                </div>
                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-[#F9EFC7]">
                  Verified GST Supplier
                </div>
              </div>
            </div>

            {/* Quick Links - Mobile */}
            <div className="py-4 border-b border-white/10">
              <h3 className="font-semibold text-lg text-[#F9EFC7] text-center mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <Link to="/" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  Home
                </Link>
                <Link to="/about" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  About Us
                </Link>
                <Link to="/services" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  Services
                </Link>
                <Link to="/hsn-deals" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  HSN Deals
                </Link>
                <Link to="/contact" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  Contact
                </Link>
                <Link to="/quote" className="bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md text-center transition-colors">
                  Quote
                </Link>
              </div>
            </div>

            {/* Contact Info - Mobile */}
            <div className="py-4">
              <h3 className="font-semibold text-lg text-[#F9EFC7] text-center mb-4">Contact Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F9EFC7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p>H.no 9-44, KBR Colony, Jinnaram, Near Jyothi Theater, IDA Bollaram, Hyderabad-502325, Telangana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#F9EFC7]" />
                  <span>Contact us for phone number</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#F9EFC7]" />
                  <span>Owner: L K</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop footer */}
        <div className="hidden sm:grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#F9EFC7] p-2 rounded-lg">
                <Factory className="h-6 w-6 text-black" />
              </div>
              <div className="font-bold text-lg">
                SHRI LAKSHMI<br />SAI INSULATION
              </div>
            </div>
            <p className="text-gray-100 mb-4 text-center md:text-left">
              Industrial & Commercial Insulation Experts delivering quality solutions since 2017
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-[#F9EFC7]">
                <span className="text-sm flex items-center gap-2"><span className="text-white font-bold">✓</span> Over a Decade of Experience</span>
              </div>
              <div className="flex items-center gap-2 text-[#F9EFC7]">
                <span className="text-sm flex items-center gap-2"><span className="text-white font-bold">✓</span> Verified GST Supplier</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-6 text-xl text-[#F9EFC7]">Contact Information</h3>
            <div className="space-y-4 text-sm text-gray-100">
              <div className="flex items-start gap-3 text-center md:text-left">
                <MapPin className="h-5 w-5 text-[#F9EFC7] flex-shrink-0 mt-0.5" />
                <div>
                  <p>H.no 9-44, KBR Colony, Jinnaram,</p>
                  <p>Near Jyothi Theater, IDA Bollaram,</p>
                  <p>Hyderabad-502325, Telangana, India</p>
                  <p className="text-xs text-[#F9EFC7] mt-1">Additional operations in Visakhapatnam, AP</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-[#F9EFC7]" />
                <span>Contact us for phone number</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-[#F9EFC7]" />
                <span>Owner: L K</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold mb-6 text-xl text-[#F9EFC7]">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-100">
              <li>
                <Link to="/" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Services
                </Link>
              </li>
              <li>
                <Link to="/hsn-deals" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> HSN Deals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-[#F9EFC7] transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-200">
            © 2025 Shri Lakshmi Sai Insulation. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            GST No: 36APJPS3263K2ZS | Professional Insulation Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
