import React from 'react';

import About from './About/About';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact';

import './components-main.scss';

export default function Main() {
    return (
        <div className="main">
            <div className="home">
                <h2 className="home-title">
                    I'm a Front End Developer
                </h2>
                <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id, harum nobis corporis possimus aliquid facere laudantium ut! Autem voluptas tempora impedit corporis, natus ipsum reiciendis est iusto rerum libero.</p>
            </div>

            <About />
            <Projects />
            <Experience />
            <Contact />

        </div>
    )
}