import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles/nav.scss';

const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1.5em 0'
}
const smallLinkStyle = {
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1.5em 0'
}

const smallBackground = {
    backgroundColor: 'rgba(0,0,0,0.9)'
}

const smallStyle = {
    height: '100vh',
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
    const [ small, setSmall ] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);

    const toggleNav = e => {
        setSmall(!small);
    }
    const closeNav = e => {
        setSmall(false);
    }
    
    return (
        <nav className="nav" id="nav">
            <div className="nav-main">
                <div className="nav-link">
                    <Link style={linkStyle} to="/">
                        Home
                    </Link>
                </div>
                <div className="nav-link">
                    <Link style={linkStyle} to="/about">
                        About
                    </Link>
                </div>
                <div className="nav-link">
                    <Link style={linkStyle} to="/project">
                        Project
                    </Link>
                </div>
                <div className="nav-link">
                    <Link style={linkStyle} to="/experience">
                        Experience
                    </Link>
                </div>
                <div className="nav-link">
                    <Link style={linkStyle} to="/guestbook">
                        Guestbook
                    </Link>
                </div>
                <div className="nav-link">
                    <Link style={linkStyle} to="/contact">
                        Contact
                    </Link>
                </div>
            </div>


            <div className="nav-small" style={small ? smallBackground : null}>
                <button onClick={toggleNav} className="nav-small-button">{small ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
                <ul style={small ? smallStyle : null} className="nav-small-list">
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/">
                        Home
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/about">
                        About
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/project">
                        Project
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/experience">
                        Experience
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/guestbook">
                        Guestbook
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-small-link" onClick={closeNav} to="/contact">
                        Contact
                    </Link>
                </div>
                </ul>
            </div>
        </nav>
    )
    
    
}