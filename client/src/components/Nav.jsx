import React, { useState, useEffect } from 'react';
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

let prevScrollPos = window.pageYOffset;

const listener = e => {
    let currentScrollPos = window.pageYOffset;
    if(prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}

export default function Nav() {
    const [ isWhite, setIsWhite ] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);
    
    return (
        <nav className="nav" id="nav">
            <div className="nav-main">
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/">
                        Home
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/about">
                        About
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/project">
                        Project
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(true)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/experience">
                        Experience
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/guestbook">
                        Guestbook
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => setIsWhite(false)} style={isWhite ? whiteBackground : linkStyle} to="/portfolio/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
    
}