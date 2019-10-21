import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('home');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Switch>
        <Route exact path="/portfolio/" component={Home} />
        <Route exact path="/portfolio/about" component={About} />
        <Route exact path="/portfolio/project" component={Project} />
        <Route exact path="/portfolio/experience" component={Experience} />
        <Route exact path="/portfolio/contact" component={Contact} />
        <Route exact path="/portfolio/guestbook" component={Guestbook} />
      </Switch>
    </div>
  );

}

export default App;