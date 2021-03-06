import React, { useState } from 'react';

import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
const Project = ({ title, tech, logo, desc, link, ...props }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      className={`text-black w-5/6 md:w-2/6 lg:w-1/5 shadow-base rounded-lg mx-4 my-16 ${props.className}`}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection='vertical'
        containerStyle={{
          height: '40vh',
        }}
      >
        <div
          className='bg-gray-200 rounded-lg '
          onClick={() => setFlipped(!isFlipped)}
        >
          <img className='mx-auto py-4 w-20' src={logo} alt='dumbbell' />
          <h3 className='text-lg text-center py-4 uppercase font-bold h-full'>
            {title}
          </h3>
          <p className='mx-5 font-medium text-xs text-gray-600 pb-4  h-24'>
            {desc}
          </p>
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
        </div>
        <div
          className='back__card bg-secondary font-bold rounded-lg text-white pl-4 h-full'
          onClick={() => setFlipped(!isFlipped)}
        >
          <h2 className='py-4'> Technologies Used : </h2>
          {tech.map((singleTech, index) => {
            return <li key={index}>{singleTech}</li>;
          })}
        </div>
      </ReactCardFlip>
    </motion.div>
  );
};

export default Project;
