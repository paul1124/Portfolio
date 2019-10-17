import React from 'react';
import './styles/experience.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => 
      images[item.replace('./', '')] = r(item)
    );
    return images;
  }
const images = importAll(require.context('./images/experience/', false, /\.(png|jpg|jpeg|svg)$/));


const experiences = [
    {
        company: 'Hogarth Worldwide Inc.',
        position: 'Front End Developer',
        duration: '2019 - Current',
        location: 'Sunnyvale, CA',
        tasks: [
            'Develop new digital assets as identified by supervisor and management',
'Modify existing code to accommodate for a locale – including changing image paths, server-side includes (SSI), file names, directories, other elements, and other development tasks',
'Ensure all your work is performed according to the brief and the minimum requirements for each client',
'Produce digital assets in several languages',
'Update and amend existing assets',
'Maintain client digital assets to the best of your ability using clean, accessible mark-up according to the latest web standards',
'Help and advise project managers with client’s digital requests',
'Keep an eye on the latest trends to help boost development efficiencies',
'Awareness of the client’s mobile platform with the ability to build solutions that take advantage of the latest operating system features while remaining performant on the latest devices'
        ],
        img: images['hogarth.png']
    }
]

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <h2 className="experience-title">Experience</h2>
            <div className="experience-container">
                {experiences.map(experience => {
                    return (
                        <div className="experience-col" key={experience.company}>
                            <div className="experience-img-container">
                                <img src={experience.img} alt={experience.company + ' logo'} className="experience-img" />
                            </div>
                            <div className="experience-main">
                                <h2 className="experience-position">{experience.position}</h2>
                                <h3 className="experience-company">{experience.company}</h3>
                                <p className="experience-duration"> {experience.duration}</p>
                                <ul className="experience-tasks">
                                    {experience.tasks.map(task => {
                                        return (
                                            <li className="experience-task" key={task}>{task}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}