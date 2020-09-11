import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTasks,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <nav
      className={`bg-white h-16 w-full  fixed bottom-0 right-0 z-30 text-secondary  flex flex-col justify-evenly `}
    >
      <ul className='h-64 flex justify-evenly items-center uppercase'>
        <li>
          <Link to='/' className='font-bold'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>

        <li>
          <Link to='/projects' className='font-bold'>
            <FontAwesomeIcon icon={faTasks} />
          </Link>
        </li>

        <li>
          <Link to='/about' className='font-bold'>
            <FontAwesomeIcon icon={faAddressCard} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
