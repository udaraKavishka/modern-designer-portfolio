import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiSearch, HiPencil, HiCube } from 'react-icons/hi';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <HiLightBulb className="h-8 w-8" />,
      title: 'Discovery',
      description: 'Understanding the project goals, user needs, and business requirements.',
    },
    {
      icon: <HiSearch className="h-8 w-8" />,
      title: 'Research',
      description: 'Conducting user research and analyzing competitor solutions.',
    },
    {
      icon: <HiPencil className="h-8 w-8" />,
      title: 'Design',
      description: 'Creating wireframes, visual designs, and interactive prototypes.',
    },
    {
      icon: <HiCube className="h-8 w-8" />,
      title: 'Deliver',
      description: 'Implementing the design and ensuring a smooth handoff to development.',
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          I follow a systematic approach to ensure every project is delivered successfully.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="process-card"
          >
            <div className="text-primary-600 mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-neutral-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;