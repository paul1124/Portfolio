import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faAd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import svgg from './images/home/22.svg';
import './styles/nav.scss';

const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '1.5em 0'
}

// const smallBackground = {
//     backgroundColor: 'rgba(0,0,0,0.9)'
// }

// const smallStyle = {
//     height: '100vh',
// }

let prevScrollPos = window.pageYOffset;

const listener = e => {
    let currentScrollPos = window.pageYOffset;
    currentScrollPos == 0 ? 
        Array.prototype.slice.call(document.getElementsByClassName("navbar-link")).map(element => {
            element.style.padding = '2em 1em';
            element.style.transition = 'all 0.25s ease-in-out';
        })
        : 
        Array.prototype.slice.call(document.getElementsByClassName("navbar-link")).map(element => {
            element.style.padding = '1em';
        });
    currentScrollPos != 0 ? 
        document.getElementById("nav").style.boxShadow = '0 20px 15px -15px rgba(0, 0, 0, 0.575)'
        :
        document.getElementById("nav").style.boxShadow = 'none'
    currentScrollPos != 0 ? 
        document.getElementById("nav").style.backgroundColor = 'rgb(30, 30, 47)'
        :
        document.getElementById("nav").style.backgroundColor = 'rgba(30, 30, 47, 0.403)'
    if(currentScrollPos < 70) {
        document.getElementById("nav").style.top = "0";
    }
    else if(prevScrollPos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-60px";
    }
    prevScrollPos = currentScrollPos;
}

const Nav = () => {
    // const [ small, setSmall ] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', listener);
        
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);

    // const toggleNav = e => {
    //     setSmall(!small);
    // }
    // const closeNav = e => {
    //     setSmall(false);
    // }
    return (
        <nav className="nav" id="nav">
            <div className="nav-home">
                <img id="nav-home-svg" src={svgg} />
                <a href="home" id="nav-home" className="navbar-link">PH</a>
            </div>
            <div className="nav-links">
                <a href="about" className="navbar-link">
                    {/* <FontAwesomeIcon className="navbar-link-icon" icon={faAd} /> */}
                     about
                </a>
                <a href="project" className="navbar-link">
                    {/* <FontAwesomeIcon className="navbar-link-icon" icon={faAd} /> */}
                     project
                </a>
                <a href="contact" className="navbar-link">
                    {/* <FontAwesomeIcon className="navbar-link-icon" icon={faAd} /> */}
                     contact
                </a>
                <a href="resume" id="nav-resume" className="navbar-link">
                    {/* <FontAwesomeIcon className="navbar-link-icon" icon={faAd} /> */}
                     resume
                </a>
            </div>
        </nav>
    )
}

export default Nav;

// export default function Nav() {
//     const [ small, setSmall ] = useState(false);
//     useEffect(() => {
//         window.addEventListener('scroll', listener);
//         return () => {
//             window.removeEventListener('scroll', listener);
//         }
//     }, []);

//     const toggleNav = e => {
//         setSmall(!small);
//     }
//     const closeNav = e => {
//         setSmall(false);
//     }
    
//     return (
//         <nav className="nav" id="nav">
//             <div className="nav-main">
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/">
//                         Home
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/about">
//                         About
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/project">
//                         Project
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/experience">
//                         Experience
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/guestbook">
//                         Guestbook
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link style={linkStyle} to="/contact">
//                         Contact
//                     </Link>
//                 </div>
//             </div>


//             <div className="nav-small" style={small ? smallBackground : null}>
//                 <button onClick={toggleNav} className="nav-small-button">{small ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}</button>
//                 <ul style={small ? smallStyle : null} className="nav-small-list">
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/">
//                         Home
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/about">
//                         About
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/project">
//                         Project
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/experience">
//                         Experience
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/guestbook">
//                         Guestbook
//                     </Link>
//                 </div>
//                 <div className="nav-link">
//                     <Link className="nav-small-link" onClick={closeNav} to="/contact">
//                         Contact
//                     </Link>
//                 </div>
//                 </ul>
//             </div>
//         </nav>
//     )
    
    
// }