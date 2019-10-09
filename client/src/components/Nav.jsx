import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './styles/nav.scss';

const navStyle = {
    width: 0 + 'em'
}
const navLinkStyle = {
    // display: 'none'
}

export default function Nav() {
    const [ open, setOpen ] = useState(false);
    return (
        <nav className="nav" id="nav">
            <div className="nav-main" style={open ? null : navStyle}>
                <div className="nav-heading" style={open ? null : navLinkStyle}>
                    <h2>Paul&nbsp;Hong</h2>
                </div>
                <hr className="nav-divider" />
                <ul className="nav-links" style={open ? null : navLinkStyle}>
                    <li className="nav-link"><a href="#home">Home</a></li>
                    <li className="nav-link"><a href="#about">About</a></li>
                    <li className="nav-link"><a href="#project">Project</a></li>
                    <li className="nav-link"><a href="#experience">Experience</a></li>
                    <li className="nav-link"><a href="#guestbook">Guestbook</a></li>
                    <li className="nav-link"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <button className="nav-toggle" onClick={() => setOpen(!open)}>
                {
                    open ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />
                }
            </button>
        </nav>
    )
}