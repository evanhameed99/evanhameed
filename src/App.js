import React from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import Projects from './containers/Projects';
import About from './containers/About';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import github from './images/logo 5.png';
import linkedinorange from './images/linkedin 1.png';
import twitterorange from './images/twitter 1.png';
import bg from './images/darktexture.jpg';
import Contact from './containers/Contact';

function App() {
  return (
    <>
      <Particles
        className='bg-transparent fixed top-0 right-0 left-0'
        id='tsparticles'
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#EE7153',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

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
        <HashRouter>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </AnimatePresence>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
