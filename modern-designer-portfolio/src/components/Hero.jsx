import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Creating <span className="gradient-text">beautiful</span> digital experiences
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hi, I'm Sarah Chen. I design and build user-centered interfaces that help businesses connect with their audience.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  View My Work
                  <HiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="btn btn-outline w-full sm:w-auto"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary-100 to-violet-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sarah Chen"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-violet-100 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;