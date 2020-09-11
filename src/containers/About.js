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
  return (
    <motion.div
      exit='out'
      animate='in'
      initial='out'
      variants={pageVariant}
      transition={pageTransition}
      className='md:h-half h-quarter flex items-center justify-center about overflow-hidden'
    >
      <div className=' text-xl md:text-2xl w-11/12 lg:w-3/5 md:w-4/5   text-white p-4 shadow-lg flex flex-col items-center '>
        <img
          className='w-24 h-24 rounded-full mb-6'
          src={profile}
          alt='profile'
        />
        <p className='text-gray-400'>
          As a software engineering student, my life has always been about
          studying, coding, and discovering new technologies. Building websites
          is my favorite way to express my ideas, thoughts, and creativity. What
          I really love about coding and development is the amount of feedback,
          support, and love I get when people get to try my projects. When I am
          not coding, I will probably be reading online courses or working out.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
