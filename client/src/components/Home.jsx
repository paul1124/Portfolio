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
                        <div className="home-heading">
                            <h2 className="home-title">
                                Paul Hong
                            </h2>
                            <h4 className="home-subtitle">
                                <div className="home-subtitle-underline">Full Stack Developer</div>
                            </h4>
                        </div>
                        <div className="mid-line">
                            <div className="home-line"></div>
                            <div className="home-line-right"></div>
                        </div>
                        <div className="home-links">
                            <ul className="home-links-container">
                                <li className="home-link">
                                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                                </li>
                                <li className="home-link">
                                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                </li>
                                <li className="home-link">
                                    <a href=""><FontAwesomeIcon icon={faFilePdf} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}