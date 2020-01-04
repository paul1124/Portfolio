import React, { useState, useEffect } from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import Social from './components/Social';
import './App.scss';

function App() {
  const [ currentPage, setCurrentPage ] = useState('home');
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="app">
      <Nav />
      {/* <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        runOnMount={true}
      >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/guestbook" component={Guestbook} />
      </AnimatedSwitch> */}
      <Social />
      <Home />
      <About />
      <Project />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );

}

export default App;