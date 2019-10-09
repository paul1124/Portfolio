import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './styles/nav.scss';

const navStyle = {
    width: 0 + '%'
}

export default function Nav() {
    const [ open, setOpen ] = useState(true);
    return (
        <nav className="nav" id="nav">
            <div className="nav-main" style={open ? '' : navStyle}>
                <div className="nav-heading">
                    <h2>Paul Hong</h2>
                </div>
                <hr/>
                <ul className="nav-links">
                    <li className="nav-link"><a href="">Home</a></li>
                    <li className="nav-link"><a href="">About</a></li>
                    <li className="nav-link"><a href="">Project</a></li>
                    <li className="nav-link"><a href="">Experience</a></li>
                    <li className="nav-link"><a href="">Guestbook</a></li>
                    <li className="nav-link"><a href="">Contact</a></li>
                    <li className="nav-link"><a href="">Footer</a></li>
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