import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
        <Home />
        <About />
    </div>
  );

}

export default App;