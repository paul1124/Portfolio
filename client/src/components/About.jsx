import React from 'react';
import AboutImg from './images/about/main_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './styles/about.scss';

export default function About() {
    return (
        <div id="about" className="about">
            <div className="about-intro">
                <img className="about-img" src={AboutImg} alt="main"/>
                <div className="about-introduction">
                    <h2 className="introduction-heading">Hey. I'm Paul.</h2>
                    <p className="introduction-message">I design and develop simple and clean websites, and I love what I do. I'm always looking for opportunities to learn something as well as use what I have to design the best website. I've taken different routes to pursue throughout my whole life, and right now I'm fixated on full-stack development.</p>
                </div>
            </div>
            <div className="about-main">
            </div>
        </div>
    )
}