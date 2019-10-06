import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
        <Home />
        <About />
        <Project />
        <Contact />
    </div>
  );

}

export default App;