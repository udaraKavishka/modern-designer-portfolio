import React from 'react';
import { Link } from 'react-scroll';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="home" className="text-2xl font-bold cursor-pointer">
              sarah<span className="text-primary-600">.</span>
            </Link>
            <p className="text-neutral-400 mt-2 max-w-md">
              Creating beautiful digital experiences through thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
              >
                Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-neutral-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </div>
            
            <p className="text-neutral-500 flex items-center">
              Made with <HiHeart className="text-primary-600 mx-1" /> by Sarah Chen © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;