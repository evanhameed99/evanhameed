import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import Projects from './containers/Projects';
import About from './containers/About';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import bg from './images/darktexture.jpg';
import Contact from './containers/Contact';
import ParticlesBg from './components/Particles/ParticlesBg';
import SocialMedia from './components/SoicalMedia/SocailMedia';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  }, []);
  return (
    <>
      {spin ? (
        <Spinner />
      ) : (
        <>
          {' '}
          <ParticlesBg />
          <div
            className='App'
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
            }}
          >
            <SocialMedia />
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
          </div>{' '}
        </>
      )}
    </>
  );
}

export default App;
