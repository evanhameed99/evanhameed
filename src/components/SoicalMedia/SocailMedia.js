import React from 'react';
import github from '../../images/logo 5.png';
import linkedinorange from '../../images/linkedin 1.png';
import twitterorange from '../../images/twitter 1.png';
const SocailMedia = () => {
  return (
    <span className='bg-white py-4 px-2 flex flex-col w-10 shadow-lg app__socialmedia__span z-10'>
      <span>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/evanhameed99'
        >
          <img
            className='mb-4 cursor-pointer transition  ease-in-out hover:opacity-75 '
            src={github}
            alt='github'
          />
        </a>
      </span>
      <span>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/evan-hameed-2508a01b0/'
        >
          <img
            className='mb-4 cursor-pointer transition  ease-in-out hover:opacity-75 '
            src={linkedinorange}
            alt='linkedin'
          />
        </a>
      </span>
      <span>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://twitter.com/evannnnn99'
        >
          <img
            className='mb-4 cursor-pointer transition  ease-in-out hover:opacity-75 '
            src={twitterorange}
            alt='twitter'
          />
        </a>
      </span>
    </span>
  );
};

export default SocailMedia;
