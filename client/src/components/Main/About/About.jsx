import React from 'react';
import Icon from '@mdi/react';
import Elephant from '../../../images/elephant.png';
import { mdiAirplay, mdiResponsive, mdiTelevisionGuide, mdiMonitorClean } from '@mdi/js';

import './about.scss';

export default function About() {
    return (
        <div className="about">
            <h2 className="about-title">Brief</h2>

            <div className="about-main">
                <div className="about-main-image">
                    <img src={Elephant} alt="random"/>
                </div>
                <p className="about-main-summary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquam fuga, sequi beatae nam, eaque numquam facere distinctio corrupti consequatur, impedit voluptatem neque! Accusamus, delectus! Vero eligendi hic corporis, beatae qui deserunt, vel nihil quibusdam facilis cum alias, assumenda sapiente repellendus excepturi fuga sequi. Explicabo sapiente amet quas dolorem possimus.
                </p>
            </div>

            <div className="about-grid">
                <div className="grid-section grid-item-1">
                    <figure className="grid-section-figure">
                        <Icon path={mdiAirplay} title="web-application" color="" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Web Application</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-2">
                    <figure className="grid-section-figure">
                        <Icon path={mdiResponsive} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Responsiveness</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-3">
                    <figure className="grid-section-figure">
                        <Icon path={mdiTelevisionGuide} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>UI/UX</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
                <div className="grid-section grid-item-4">
                    <figure className="grid-section-figure">
                        <Icon path={mdiMonitorClean} title="airplay" />
                    </figure>
                    <figcaption className="grid-section-figcaption">
                        <strong>Clean and Minimalistic</strong><br/>
                        This is figcaption section
                    </figcaption>
                </div>
            </div>

            <h2 className="about-title-mid">What do I use?</h2>

            <div className="about-tech">
                <div className="about-tech-section">
                    <h2 className="section-title">
                        Front End
                    </h2>
                    <ul className="section-list">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript (Vanilla)</li>
                        <li>React.js</li>
                        <li>Sass</li>
                    </ul>
                </div>
                <div className="about-tech-section">
                <h2 className="section-title">
                        Server Side
                    </h2>
                    <ul className="section-list">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="about-tech-section">
                <h2 className="section-title">
                        Dev Tools
                    </h2>
                    <ul className="section-list">
                        <li>Git</li>
                        <li>SVN</li>
                        <li>Terminal</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}