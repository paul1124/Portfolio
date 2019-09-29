import React, { useState, useEffect } from 'react';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import './App.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('');

  return (
    <div className="app">
      <Background currentPage={currentPage} />
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default App;
