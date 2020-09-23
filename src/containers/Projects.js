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
      tech: [
        'React',
        'React-router',
        'Redux state management tool',
        'Mailchimp',
        'Tailwind CSS',
      ],
      logo: 'https://www.flaticon.com/svg/static/icons/svg/3043/3043888.svg',
    },
    {
      title: 'COVID-19 TRACKER',
      description:
        'Online tracker that exhibits daily COVID-19 total, recovered, and death cases by demonstrating the daily statistics on tables, charts, and map.',
      link: 'https://covid-19-tracker-be85c.firebaseapp.com/',
      tech: [
        'React',
        'React leaflet',
        'React chart js',
        'Material UI',
        'Firebase hosting',
      ],
      logo: 'https://www.flaticon.com/svg/static/icons/svg/2585/2585191.svg',
    },
    {
      title: 'WHATSAPP DESKTOP CLONE',
      description:
        'Whatsapp clone where I tried to implement whatsapp user interface and some of its functionalities such as messaging ,rooming, and authentication.',
      link: 'https://whatsup-clone-50091.firebaseapp.com/',
      tech: [
        'React',
        'React-router',
        'Context API',
        'Material UI',
        'Firebase hosting',
      ],
      logo: 'https://www.flaticon.com/svg/static/icons/svg/733/733585.svg',
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
        {projects.map((proj, index) => {
          return (
            <Project
              key={index}
              className='project'
              title={proj.title}
              desc={proj.description}
              link={proj.link}
              tech={proj.tech}
              logo={proj.logo}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
