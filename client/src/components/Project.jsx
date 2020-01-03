import React, { useEffect } from 'react';
import './styles/project.scss';
import { Carousel } from 'react-bootstrap';
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
        view: 'https://chingu-voyage7.github.io/Geckos-Team-14/',
        code: 'https://github.com/chingu-voyage7/Geckos-Team-14'
    },
    {
        name: 'Job Tracker',
        img: images['job_tracker.png'],
        description: 'Full-Stack Web Application for tracking applied job applications',
        view: 'https://chingu-job-shark.herokuapp.com/',
        code: 'https://github.com/chingu-voyages/v8-chimeras-team-04'
    },
    {
        name: 'Blue Ocean Remodeling',
        img: images['blueocean.png'],
        description: 'Website for Remodeling company Blue Ocean built with React',
        view: 'https://paul1124.github.io/blueocean/',
        code: 'https://github.com/paul1124/blueocean/'
    },
]

const Project = () => {
    return (
        <section className="projects" id="projects">
            <div className="featured">
                <div className="featured-project-odd">
                    <div className="featured-project-image">
                        <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
                    </div>
                    <div className="featured-project-info">
                        <div className="featured-top">
                            <p className="featured-subheading">Featured</p>
                            <h2 className="featured-heading">trello.com Clone</h2>
                            <p className="featured-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit ullam sapiente laboriosam fugiat culpa, vero esse fuga eveniet minus architecto animi at soluta assumenda omnis iusto. Porro, repudiandae esse.
                            </p>
                        </div>
                        <div className="featured-bottom">
                            <ul className="featured-tech">
                                <li>React.js</li>
                                <li>Sass</li>
                                <li>localStorage</li>
                            </ul>
                            <div className="featured-links">
                                <div className="featured-link">Github</div>
                                <div className="featured-link">Demo</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured-project-even">
                    <div className="featured-project-info">
                        <p className="featured-subheading">Featured</p>
                        <h2 className="featured-heading">trello.com Clone</h2>
                        <p className="featured-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit ullam sapiente laboriosam fugiat culpa, vero esse fuga eveniet minus architecto animi at soluta assumenda omnis iusto. Porro, repudiandae esse.
                        </p>
                        <ul className="featured-tech">
                            <li>React.js</li>
                            <li>Sass</li>
                            <li>localStorage</li>
                        </ul>
                        <div className="featured-links">
                            <div className="featured-link">Github</div>
                            <div className="featured-link">Demo</div>
                        </div>
                    </div>
                    <div className="featured-project-image"></div>
                </div>
            </div>
        </section>
    );
};

export default Project;

// export default function Project() {
//     return (
//         <section className="projects" id="project">
//             <h2 className="projects-title">Projects</h2>
//             <Carousel className="project-container">
//             {projects.map(project => {
//                     return (
//                         <Carousel.Item className="project" key={project.name}>
//                             <img className="d-block w-100 project-img" src={project.img} alt={project.name}/>
//                             <Carousel.Caption className="project-main">
//                                 <h2 className="project-name">{project.name}</h2>
//                                 <p className="project-description">{project.description}</p>
//                                 <a className="project-preview" href={project.view}><FontAwesomeIcon icon={faSearch}/> Preview</a>
//                                 <a href={project.code} className="project-code"><FontAwesomeIcon icon={faCode}/> Source</a>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     )
//                 })}
//             </Carousel>
//         </section>
//     )
// }