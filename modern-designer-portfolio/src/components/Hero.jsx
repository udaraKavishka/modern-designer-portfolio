import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-indigo-600">Nilidu Kehan</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                I design and build user-centered interfaces that help businesses connect with their audience.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  className="btn bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition w-full sm:w-auto flex items-center justify-center"
                >
                  View My Work
                  <HiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition w-full sm:w-auto flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-indigo-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-violet-100 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
