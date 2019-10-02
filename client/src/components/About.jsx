import React from 'react';
import AboutImg from './images/about/main_pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiAirplay, mdiResponsive, mdiTelevisionGuide, mdiMonitorClean } from '@mdi/js';

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
            <div className="about-grid">
                <div className="grid-section grid-item-1">
                    <figure className="grid-section-figure">
                        <Icon size={1} path={mdiAirplay} title="web-application" color="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Web Application</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-2">
                    <figure className="grid-section-figure">
                        <Icon size={1} path={mdiResponsive} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Responsiveness</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-3">
                    <figure className="grid-section-figure">
                        <Icon size={1} path={mdiTelevisionGuide} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>UI/UX</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-4">
                    <figure className="grid-section-figure">
                        <Icon size={1} path={mdiMonitorClean} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Clean and Minimalistic</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
            </div>

            </div>
        </div>
    )
}