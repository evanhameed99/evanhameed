import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import SideNav from './SideNav';

const Navbar = () => {
  
  const [isDesktop, setDesktop] = useState(window.innerWidth > 800);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div data-testid='navbar'>
      <div>{isDesktop ? <Toolbar /> : <SideNav />}</div>
    </div>
  );
};

export default Navbar;
