import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import Projects from './containers/Projects';
import About from './containers/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import github from './images/logo 5.png';
import linkedinorange from './images/linkedin 1.png';
import twitterorange from './images/twitter 1.png';
import bg from './images/darktexture.jpg';

function App() {
  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
      }}
    >
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
      <BrowserRouter>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
