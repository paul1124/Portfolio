import React from 'react';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item"><a href="#home">Paul</a></li>
        <li className="navbar-list-item"><a href="#about">About</a></li>
        <li className="navbar-list-item"><a href="#projects">Projects</a></li>
        <li className="navbar-list-item"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}