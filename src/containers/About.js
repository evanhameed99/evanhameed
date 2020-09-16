import React from 'react';
import './About.css';
import profile from '../images/profile.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const pageVariant = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: '20vh',
    },
  };
  const pageTransition = {
    duration: 1,
    ease: 'easeOut',
  };
  const pageVariant2 = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '20vh',
    },
  };
  const pageTransition2 = {
    duration: 1,
    ease: 'easeOut',
  };
  return (
    <div className='md:flex-row flex flex-col items-center justify-center z-10'>
      <motion.div
        exit='out'
        animate='in'
        initial='out'
        variants={pageVariant}
        transition={pageTransition}
        className='md:w-1/4 w-5/6 m-4  bg-blue-100'
      >
        <img className='shadow-lg' src={profile} alt='profile' />
      </motion.div>
      <motion.div
        exit='out'
        animate='in'
        initial='out'
        variants={pageVariant2}
        transition={pageTransition2}
        className=' md:w-2/5 w-5/6 '
      >
        <p className='md:text-xl text-lg text-gray-300 font-medium  '>
          As a software engineering student, my life revolves around studying,
          coding, and discovering new technologies. Building websites is my
          favorite way to express my ideas, thoughts, and creativity. When I am
          not coding, I will probably be reading online courses or working out.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
