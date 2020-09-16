import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

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
          Evan Hameed <br />
          <span className='text-secondary'>
            <Typical
              steps={[
                'Web Developer... ',
                1500,
                'Software Craftsman...  ',
                1500,
                'Web Designer... ',
                1500,
              ]}
              loop={Infinity}
              wrapper='p'
            />
          </span>
        </h1>

        <Link
          to='/contact'
          className='hover:bg-white hover:text-secondary transition-all duration-200 ease-in-out ml-8 font-body text-white font-bold bg-secondary  px-2 py-2  shadow-md'
        >
          <span className='tracking-wider'>CONTACT NOW</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
