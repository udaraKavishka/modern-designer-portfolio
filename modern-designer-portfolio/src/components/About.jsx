import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiColorSwatch, HiCube, HiLightBulb } from 'react-icons/hi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Master of Design',
      school: 'Rhode Island School of Design',
      year: '2018 - 2020',
    },
    {
      degree: 'Bachelor of Fine Arts',
      school: 'Parsons School of Design',
      year: '2014 - 2018',
    },
  ];

  const experience = [
    {
      role: 'Senior Product Designer',
      company: 'Tech Innovation Labs',
      period: '2020 - Present',
      description: 'Leading design initiatives for enterprise software solutions.',
    },
    {
      role: 'UI/UX Designer',
      company: 'Creative Agency Co.',
      period: '2018 - 2020',
      description: 'Designed user interfaces for various client projects.',
    },
  ];

  const skills = [
    {
      category: 'Design',
      items: ['UI Design', 'UX Design', 'Interaction Design', 'Visual Design', 'Prototyping'],
    },
    {
      category: 'Tools',
      items: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Protopie'],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          I'm a UI/UX designer with over 5 years of experience creating digital products that users love. My approach combines creativity with user-centered design principles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary-600 pl-4">
                <h4 className="font-bold">{edu.degree}</h4>
                <p className="text-neutral-600">{edu.school}</p>
                <p className="text-sm text-neutral-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary-600 pl-4">
                <h4 className="font-bold">{exp.role}</h4>
                <p className="text-neutral-600">{exp.company}</p>
                <p className="text-sm text-neutral-500">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;