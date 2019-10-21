import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/nav.scss';

const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1.5em 0'
}
const whiteBackground = {
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1.5em 0',
    color: 'black'
}

export default function Nav() {
    const [ isWhite, setIsWhite ] = useState(false);
    
    return (
        <nav className="nav" id="nav">
            <div className="nav-main">
                <div className="nav-link"><Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/">Home</Link></div>
                <div className="nav-link"><Link onClick={() => setIsWhite(true)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/about">About</Link></div>
                <div className="nav-link"><Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/project">Project</Link></div>
                <div className="nav-link"><Link onClick={() => setIsWhite(true)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/experience">Experience</Link></div>
                <div className="nav-link"><Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/guestbook">Guestbook</Link></div>
                <div className="nav-link"><Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/contact">Contact</Link></div>
            </div>
        </nav>
    )
}