import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const pageVariant = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: '-100vh',
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
      className=' h-half flex items-center'
    >
      <div>
        <h1 className='font-body text-white text-3xl md:text-4xl lg:text-6xl ml-8 mb-4'>
          Evan Hameed <br /> Front-end Web developer
        </h1>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=evanhameed9966@gmail.com&tf=1'
          className=' ml-8 font-body text-white font-bold bg-secondary px-2 py-2  shadow-md'
        >
          <span className='tracking-wider'>CONTACT NOW</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
