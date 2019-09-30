import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './styles/home.scss';

export default function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <figure className="home-image"></figure>
                <div className="home-main">
                    <div className="home-main-content">
                        <h2 className="home-title">
                            Paul Hong
                        </h2>
                        <h4 className="home-subtitle">
                            <div className="home-subtitle-underline"><span className="main-color">Full-Stack</span> Web Developer</div>
                        </h4>
                        <hr className="home-hr" />
                        <div className="home-sub-content">
                            <ul className="home-nav">
                                <li><a href="#about">About</a></li>
                                <li><a href="#project">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <hr className="home-hr-2nd" />
                        <ul className="home-links">
                            <li className="home-link">
                                <a className="home-link-item" href="https://www.linkedin.com/in/paulhong931124">
                                <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </li>
                            
                            <li className="home-link">
                                <a className="home-link-item" href="https://www.github.com/paul1124">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </li>
                            
                            <li className="home-link">
                                <a className="home-link-item" href="">
                                    <FontAwesomeIcon icon={faFilePdf}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}