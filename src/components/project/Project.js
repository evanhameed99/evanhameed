import React from 'react';
import logo from '../../images/darkdum.png';
import { motion } from 'framer-motion';
const Project = ({ title, desc, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      className='bg-gray-200 text-black w-5/6 md:w-2/6 lg:w-1/5 shadow-base rounded-lg m-4'
    >
      <img className='mx-auto py-4' src={logo} alt='dumbbell' />
      <h3 className='text-lg text-center py-4 uppercase font-bold'>{title}</h3>
      <p className='mx-5 font-medium text-xs text-gray-600 pb-4'>{desc}</p>
      <div className=' flex justify-around pb-4'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={link}
          className='font-bold text-white bg-secondary px-2 py-2 shadow-md'
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
