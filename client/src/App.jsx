import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
    <Nav />
        <Home />
        <About />
        <Project />
        {/* <Guestbook /> */}
        <Contact />
        <Footer/>
    </div>
  );

}

export default App;