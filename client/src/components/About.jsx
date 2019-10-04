import React from 'react';
import AboutImg from './images/about/main_pic.jpg';
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
            {/* <div className="about-main"> */}
            <div className="about-grid">
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiAirplay} title="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Web Application</strong><br/>
                        Lorem ipsum, dolor sit amet consectetasdfawefqwur adipisicing elit. Ducimus, quaerat.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiResponsive} title="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Responsiveness</strong><br/>
                        Lorem ipsum, dolor sit amet consectasdfawefqwetur adipisicing elit. Ducimus, quaerat.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiTelevisionGuide} title="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>UI/UX</strong><br/>
                        Lorem ipsum, dolor sit amet consectasdfawefqwetur adipisicing elit. Ducimus, quaerat.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiMonitorClean} title="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Clean and Minimalistic</strong><br/>
                        Lorem ipsum, dolor sit amet consectasdfawefqwetur adipisicing elit. Ducimus, quaerat.
                    </figcaption>
                </div>
            </div>
            <div className="about-skills">
                <h2 className="skills-title">Tech Stacks</h2>
                <div className="skills-columns">
                    <div className="skill-column">
                        <h3 className="skill-column-title">Front-End</h3>
                        <ul className="skill-column-content">
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className="skill-column">
                        <h3 className="skill-column-title">Back-End</h3>
                        <ul className="skill-column-content">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Python</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className="skill-column">
                        <h3 className="skill-column-title">Dev Tools</h3>
                        <ul className="skill-column-content">
                            <li>Git</li>
                            <li>SVN</li>
                            <li>Terminal</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}