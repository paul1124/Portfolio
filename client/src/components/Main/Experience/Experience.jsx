import React from 'react';

import './experience.scss';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
const images = importAll(require.context('../../../images/company', false, /\.(png|jpg|jpeg|svg)$/));

export default function Experience() {
    const experience = [
        {
            id: 1,
            position: 'Front End Developer',
            company: 'Hogarth WorldWide Inc.',
            description: [
                'Built/Modified responsive web pages based on the visual briefs',
                'Worked on localization of the page based on the assets provided',
                'Modified existing code to accommodate for a locale – including changing image paths, server-side includes (SSI), file names, directories, other elements, and other development tasks',
                'Built solutions in aware of the client’s mobile platform to take advantage of latest OS while performant on latest devices'
            ],
            location: 'Sunnyvale, CA',
            duration: '(2019 - Present)',
            img: images['hogarth.png']
        },
        {
            id: 2,
            position: 'Web Developer + Project Manager',
            company: 'Chingu Cohort',
            description: [
                'Remotely collaborate and have meetings to discuss Minimum Viable Product',
                'Designate partial components of the application to each members; commit to own work with responsibility, mention possible issues and debug as a team',
                'Keep an active and healthy team by ensuring that everyone on the team has the opportunity to voice their ideas and concerns'
            ],
            location: 'Remote',
            duration: '(2018 - Present)',
            img: images['chingu.png']
        }
    ]
    return (
        <div className="experience">
            <h2 className="experience-title">Experience</h2>
            {experience.map(experience => {
                return (
                    <div className="job">
                        <img src={experience.img} alt={experience.company} className="job-img"/>
                        <div className="job-noimg">
                            <h2 className="job-position">{experience.position}</h2>
                            <h3 className="job-company">{experience.company}</h3>
                            <p className="job-location">{experience.location}</p>
                            <p className="job-duration">{experience.duration}</p>
                            <ul className="job-duties">
                                {experience.description.map(task => {
                                    return (
                                        <li>{task}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}