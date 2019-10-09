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
                    <p className="introduction-message">I design and develop simple and clean websites, and I love what I do. <br/>I'm always looking for opportunities to learn something as well as use what I have to design the best website. I've taken different routes to pursue throughout my whole life, and right now I'm fixated on full-stack development.</p>
                </div>
            </div>
            <div className="about-grid">
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiAirplay} title="" size={3} />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Web Application</strong><br/>
                        Take control of what you see on your web page by manipulating the data yourself.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiResponsive} title="" size={3} />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Responsiveness</strong><br/>
                        View your web contents not only on your PC, but also on your tablets or phones.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiTelevisionGuide} title="" size={3} />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>UI/UX</strong><br/>
                        Your website is your website. Experience efficient accessibility with a touch of aesthetics.
                    </figcaption>
                </div>
                <div className="grid-section">
                    <figure className="grid-section-figure">
                        <Icon path={mdiMonitorClean} title="" size={3} />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Clean and Minimalistic</strong><br/>
                        Less is more. Cleanliness and conciseness bring more refined tone to your websites.
                    </figcaption>
                </div>
            </div>
            {/* <div className="about-skills">
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
            </div> */}
        </div>
    )
}