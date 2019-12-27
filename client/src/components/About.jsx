import React from 'react';
import './styles/about.scss';
import AboutImg from './images/about/main_pic.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-container-left">
                    <h2 className="about-title">Services</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum ea doloribus odio cum facere velit provident molestiae perspiciatis reiciendis nostrum beatae, quia sint porro deleniti eligendi? Sequi, ducimus autem!
                    </p>
                </div>
                <div className="about-container-right">
                    <img src={AboutImg} alt="main" className="about-img"/>
                </div>
            </div>
        </section>
    )
};

export default About;

// import React, { useEffect } from 'react';
// import AboutImg from './images/about/main_pic.jpg';
// import Icon from '@mdi/react';
// import { mdiAirplay, mdiResponsive, mdiTelevisionGuide, mdiMonitorClean } from '@mdi/js';

// import './styles/about.scss';

// export default function About() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);
//     return (
//         <section id="about" className="about">
//             <div className="about-container"></div>
//                 <div className="about-title">
//                     <h2>About</h2>
//                 </div>
//                 <div className="about-intro">
//                     <img className="about-img" src={AboutImg} alt="main"/>
//                     <div className="about-introduction">
//                         <h2 className="introduction-heading">Hey. </h2>
//                         <h2 className="introduction-heading-name">I'm Paul.</h2>
//                         <p className="introduction-message">I design and develop simple and clean websites, <br className="small"/> and I love what I do. 
//                         </p>
//                     </div>
//                 </div>
//                 <div className="about-grid">
//                     <div className="grid-section">
//                         <figure className="grid-section-figure">
//                             <Icon color="white" path={mdiAirplay} title="" size={3} />
//                         </figure>
//                         <figcaption className="grid-section-figcaption">
//                             <strong>Web Application</strong><br/>
//                         <span className="smallno">Take control of what you see on your web page by</span> Manipulating the data yourself.
//                         </figcaption>
//                     </div>
//                     <div className="grid-section">
//                         <figure className="grid-section-figure">
//                             <Icon color="white" path={mdiResponsive} title="" size={3} />
//                         </figure>
//                         <figcaption className="grid-section-figcaption">
//                             <strong>Responsiveness</strong><br/>
//                             <span className="smallno">View your web contents not only on your PC, but</span> Also on your tablets or phones.
//                         </figcaption>
//                     </div>
//                     <div className="grid-section">
//                         <figure className="grid-section-figure">
//                             <Icon color="white" path={mdiTelevisionGuide} title="" size={3} />
//                         </figure>
//                         <figcaption className="grid-section-figcaption">
//                             <strong>UI/UX</strong><br/>
//                             Your website is your website. <span className="smallno">Experience efficient accessibility with a touch of aesthetics.</span>
//                         </figcaption>
//                     </div>
//                     <div className="grid-section">
//                         <figure className="grid-section-figure">
//                             <Icon color="white" path={mdiMonitorClean} title="" size={3} />
//                         </figure>
//                         <figcaption className="grid-section-figcaption">
//                             <strong>Clean and Minimalistic</strong><br/>
//                             Less is more. <span className="smallno">Cleanliness and conciseness bring more refined tone to your websites.</span>
//                         </figcaption>
//                     </div>
//                 </div>
//                 {/* <div className="about-skills">
//                     <h2 className="skills-title">Tech Stacks</h2>
//                     <div className="skills-columns">
//                         <div className="skill-column">
//                             <h3 className="skill-column-title">Front-End</h3>
//                             <ul className="skill-column-content">
//                                 <li>HTML 5</li>
//                                 <li>CSS 3</li>
//                                 <li>JavaScript</li>
//                                 <li>React.js</li>
//                             </ul>
//                         </div>
//                         <div className="skill-column">
//                             <h3 className="skill-column-title">Back-End</h3>
//                             <ul className="skill-column-content">
//                                 <li>Node.js</li>
//                                 <li>Express</li>
//                                 <li>Python</li>
//                                 <li>MongoDB</li>
//                                 <li>GraphQL</li>
//                             </ul>
//                         </div>
//                         <div className="skill-column">
//                             <h3 className="skill-column-title">Dev Tools</h3>
//                             <ul className="skill-column-content">
//                                 <li>Git</li>
//                                 <li>SVN</li>
//                                 <li>Terminal</li>
//                                 <li>VS Code</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div> */}
//             {/* </div> */}
//         </section>
//     )
// }