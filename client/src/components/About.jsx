import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './styles/about.scss';

export default function About() {
    return (
        <div id="about" className="about">
            <div className="about-intro">
                <img className="about-img" src="" alt="main"/>
                <p className="about-introduction">I design and develop simple and clean websites, and I love what I do.</p>
            </div>
            <div className="about-main">
            </div>
        </div>
    )
}