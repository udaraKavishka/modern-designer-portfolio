import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { HiArrowLeft } from 'react-icons/hi';

const projects = {
  'finance-app': {
    title: 'Finance App Redesign',
    category: 'UI/UX Design',
    client: 'FinTech Solutions Inc.',
    duration: '3 months',
    year: '2023',
    description: 'A comprehensive redesign of a financial management application focusing on improving user experience and accessibility while maintaining robust functionality.',
    challenge: 'The existing app had low user engagement due to complex navigation and confusing interface. The challenge was to simplify the experience without sacrificing features.',
    solution: 'We implemented a new information architecture, streamlined workflows, and introduced a modern design system that improved usability while maintaining brand identity.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
    ],
    tools: ['Figma', 'Protopie', 'Principle'],
    deliverables: ['UX Research', 'Wireframes', 'UI Design', 'Interactive Prototype', 'Design System'],
  },
  // Add more projects here
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return (
      <div className="container py-32">
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="container py-12">
        <Link to="/" className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8">
          <HiArrowLeft className="mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl">
          <span className="text-primary-600 font-medium">{project.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{project.title}</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm text-neutral-500 mb-1">Client</h3>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-neutral-500 mb-1">Duration</h3>
              <p className="font-medium">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-sm text-neutral-500 mb-1">Year</h3>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm text-neutral-500 mb-1">Tools</h3>
              <p className="font-medium">{project.tools.join(', ')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>Overview</h2>
            <p>{project.description}</p>
            
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
            
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-12">
            {project.images.map((image, index) => (
              <Zoom key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full rounded-2xl shadow-lg"
                />
              </Zoom>
            ))}
          </div>

          <div className="bg-neutral-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Deliverables</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.deliverables.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;