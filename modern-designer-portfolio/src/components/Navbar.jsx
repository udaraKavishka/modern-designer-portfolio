import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Work', to: 'work' },
    { name: 'Process', to: 'process' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-lg shadow-neutral-100/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="home" className="cursor-pointer">
          <span className="text-2xl font-bold text-neutral-900">sarah<span className="text-primary-600">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-800 focus:outline-none"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg shadow-neutral-100/50 md:hidden"
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;