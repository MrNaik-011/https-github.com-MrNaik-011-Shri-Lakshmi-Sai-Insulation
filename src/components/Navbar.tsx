
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Factory, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products & Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'HSN Deals', path: '/hsn-deals' },
    { label: 'Related Products', path: '/related-products' },
    { label: 'Categories', path: '/categories' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-[#3550A3]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#3550A3] p-2 rounded-lg animate-pulse">
              <Factory className="h-8 w-8 text-[#F9EFC7]" />
            </div>
            <div className="text-lg font-bold text-[#3550A3] leading-tight">
              SHRI LAKSHMI<br />SAI INSULATION
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-6 text-[#3550A3] font-medium">
            {navItems.slice(0, 4).map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`hover:text-[#1a2766] transition-colors relative ${
                    isActive(item.path) ? 'text-[#1a2766] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2766]"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/quote"
            className="hidden lg:block bg-[#3550A3] text-[#F9EFC7] font-semibold rounded-md px-6 py-2 hover:bg-[#1a2766] transition-colors shadow-md"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#3550A3] p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <ul className="py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-[#3550A3] hover:bg-[#1a2766] hover:text-white transition-colors rounded-md mx-2 ${
                      isActive(item.path) ? 'bg-[#1a2766] text-white font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2">
                <Link
                  to="/quote"
                  className="block w-full text-center bg-[#3550A3] text-[#F9EFC7] font-semibold rounded-md px-4 py-3 hover:bg-[#1a2766] transition-colors shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
