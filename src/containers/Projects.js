import React from 'react';
import Project from '../components/project/Project';
import { motion } from 'framer-motion';
import './Projects.css';
const Projects = () => {
  const pageVariant = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '100vh',
    },
  };
  const pageTransition = {
    duration: 1,
    ease: 'easeOut',
  };
  const projects = [
    {
      title: 'train to maintain',
      description:
        'Training assistant that educates people on how to take care of their bodies and start thinking of their health, wellness, and fitness. In order to look better and be healthier',
      link: 'https://traintomaintains.netlify.app/',
    },
    {
      title: 'train to maintain',
      description:
        'Training assistant that educates people on how to take care of their bodies and start thinking of their health, wellness, and fitness. In order to look better and be healthier',
      link: 'https://traintomaintains.netlify.app/',
    },
    {
      title: 'train to maintain',
      description:
        'Training assistant that educates people on how to take care of their bodies and start thinking of their health, wellness, and fitness. In order to look better and be healthier',
      link: 'https://traintomaintains.netlify.app/',
    },
  ];
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='out'
      variants={pageVariant}
      transition={pageTransition}
      className=' projects'
    >
      <h1 className=' text-white font-body capitalize font-bold text-center my-8 text-4xl md:text-5xl lg:text-5xl '>
        technical projects
      </h1>
      <div className='mt-8  flex flex-wrap justify-center'>
        {projects.map((proj) => {
          return (
            <Project
              title={proj.title}
              desc={proj.description}
              link={proj.link}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;