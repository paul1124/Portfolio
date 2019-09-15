import React, { useState, useRef } from 'react';

import './projects.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('../../../images/projects', false, /\.(png|jpg|jpeg|svg)$/));

export default function Projects() {
    const [ currentProject, setCurrentProject ] = useState(1);
    const projects = [
        {
            id: 1,
            name: 'Trello',
            img: images['trello.jpg'],
            description: 'Lorem, ipsum.'
        },
        {
            id: 2,
            name: 'Job Shark',
            img: images['job-shark.jpg'],
            description: 'Lorem, ipsum.'
        },
        {
            id: 3,
            name: 'Trello',
            img: 'not yet',
            description: 'Lorem, ipsum.'
        },
        {
            id: 4,
            name: 'Trello',
            img: 'not yet',
            description: 'Lorem, ipsum.'
        }
    ]
    return (
        <div className="projects">
            <h2 className="projects-title">
                Projects
            </h2>

            <div className="projects-gallery">
                <div className="paddlenav">
                    <button className="paddlenav-btn"> Left </button>
                    <button className="paddlenav-btn"> Right </button>
                    {/* left right */}
                </div>
                <div className="projects-gallery-container">
                    {projects.map(project => {
                        return (
                            <div className="project" key={project.id} id={project.id}>
                                <img src={project.img} alt={project.name} />
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        )
                    })}
                    {/* <div className="project" id={currentProject}>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    function onLeftClick(e) {
        e.preventDefault();
        let pendingProjectId = currentProject - 1;
        if(pendingProjectId === 0) pendingProjectId += projects.length;
    }
}