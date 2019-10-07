import React from 'react';
import './styles/project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode } from '@fortawesome/free-solid-svg-icons';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => 
      images[item.replace('./', '')] = r(item)
    );
    return images;
  }
const images = importAll(require.context('./images/project/', false, /\.(png|jpg|jpeg|svg)$/));

const projects = [
    {
        name: 'Trello',
        img: images['trello.png'],
        description: 'Front-End Clone of trello',
        mainTech: [
            'React.js',
            'Sass'
        ],
        view: 'https://chingu-voyage7.github.io/Geckos-Team-14/',
        code: 'https://github.com/chingu-voyage7/Geckos-Team-14'
    },
    {
        name: 'Job Tracker',
        img: images['job_tracker.png'],
        description: 'Full-Stack Web Application for tracking applied job applications',
        mainTech: [
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js',
            'Sass'
        ],
        view: 'https://chingu-job-shark.herokuapp.com/',
        code: 'https://github.com/chingu-voyages/v8-chimeras-team-04'
    },
]


export default function Project() {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            {projects.map(project => {
                return (
                    <div className="project" key={project.name}>
                        <img className="project-img" src={project.img} alt={project.name}/>
                        <div className="project-main">
                            <h2 className="project-name">{project.name}</h2>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-techstacks">
                                {project.mainTech.map(tech => 
                                    <li key={tech}>{tech}</li>
                                )}
                            </ul>
                            <a className="project-preview" href={project.view}><FontAwesomeIcon icon={faSearch}/> Preview</a>
                            <a href={project.code} className="project-code"><FontAwesomeIcon icon={faCode}/> Source</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}