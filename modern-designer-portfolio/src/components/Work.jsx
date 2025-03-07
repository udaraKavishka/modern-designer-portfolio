import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 'finance-app',
      title: 'Finance App Redesign',
      description: 'A modern redesign of a financial management application focusing on user experience and accessibility.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      category: 'UI/UX Design',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      description: 'A complete e-commerce solution with a focus on mobile-first design and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
      category: 'Web Design',
    },
    {
      id: 'health-app',
      title: 'Health & Wellness App',
      description: 'A wellness tracking app designed to help users maintain healthy habits and achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3',
      category: 'App Design',
    },
    {
      id: 'dashboard',
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3',
      category: 'Dashboard Design',
    },
  ];

  return (
    <div className="container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project represents a unique challenge and solution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="work-card group"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium flex items-center">
                    View Project <HiArrowRight className="ml-2" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-primary-600">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;