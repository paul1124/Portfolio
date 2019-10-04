import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
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
    </div>
  );

}

export default App;