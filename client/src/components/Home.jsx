import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Resume from '../Resume.pdf';
import './styles/home.scss';

const homeLinkStyle = {
    color: 'white',
    textDecoration: 'none'
}

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <section id="home" className="home">
            <div className="home-content">
                <figure className="home-image"></figure>
                <div className="home-main">
                    <div className="home-intro-border">
                        <div className="home-intro">
                            <div className="home-intro-block">
                            <h2 className="home-name">Paul Hong</h2>
                            <h3 className="home-title">Web Developer/Designer</h3>
                            </div>
                        </div>
                    </div>
                    <div className="home-link-container">
                        <a href="https://www.linkedin.com/in/paulhong931124/" target="_blank" rel="noopener noreferrer" className="home-link">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <p className="home-link-name">LinkedIn</p>
                        </a>
                        <a href="https://www.github.com/paul1124" target="_blank" rel="noopener noreferrer" className="home-link">
                            <FontAwesomeIcon icon={faGithub} />
                            <p className="home-link-name">Github</p>
                        </a>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="home-link">
                            <FontAwesomeIcon icon={faFilePdf} />
                            <p className="home-link-name">Resume</p>
                        </a>
                        <Link className="home-link" style={homeLinkStyle} to="/contact">
                            <FontAwesomeIcon icon={faEnvelopeSquare} />
                            <p className="home-link-name">Email</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}