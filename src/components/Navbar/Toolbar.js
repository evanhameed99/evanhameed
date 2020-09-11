import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Toolbar = () => {
  const navLinksStyle = classNames(
    `px-3 py-2 flex  text-sm md:text-4xl transition transform hover:-translate-x-3 duration-500 ease-in-out hover:mr-8 font-body hover:opacity-75 hover:text-secondary  text-white uppercase font-bold  leading-snug  `
  );
  return (
    <>
      <nav
        className={`  relative sm:flex justify-end  items-center  px-2 py-3`}
      >
        <ul className='  list-none  '>
          <li>
            <Link to='/' className={navLinksStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' className={navLinksStyle}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about' className={navLinksStyle}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Toolbar;
