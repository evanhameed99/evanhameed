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
    <div className='grid place-items-center mb-16'>
      <div className=' flex lg:w-5/6 md:w-11/12 w-full flex-col items-center text-gray-300 my-8  '>
        <motion.div
          exit='out'
          animate='in'
          initial='out'
          variants={pageVariant}
          transition={pageTransition}
        >
          <img className='h-64  mb-8' src={profile} alt='profile' />
        </motion.div>
        <motion.div
          className=' w-full px-4 text-lg md:text-2xl'
          exit='out'
          animate='in'
          initial='out'
          variants={pageVariant2}
          transition={pageTransition2}
        >
          <p>
            Web developer with experience in web development from basic HTML and
            CSS up to server-side manipulation. I bring strong skills in terms
            of building interactive user interfaces using the latest web
            frameworks such as React and also Back-End processing such as
            creating and using APIs.
            <br />
            Building web applications is my favorite way to express my ideas,
            thoughts, and creativity. When I am not coding, I will probably be
            reading online courses or working out.
          </p>
        </motion.div>
        <motion.div className=' w-full px-4'>
          <h2 className='block my-8 text-secondary font-bold md:text-2xl text-xl '>
            Skill Set:
          </h2>
          <ul className='md:text-xl skillset  text-xl pl-8 '>
            <li>
              Utilizing React as a JavaScript framework to build web
              applications.
            </li>
            <li>Working with version control tools such as Git and Github.</li>
            <li>
              Styling UIs with CSS frameworks such as Bootstrap, Material UI,
              and Tailwind CSS.
            </li>
            <li>
              Handling data layouts using state management tools such as Redux
              and Context API
            </li>
            <li>
              Handling user Authentication, storage, and hosting using Firebase
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
