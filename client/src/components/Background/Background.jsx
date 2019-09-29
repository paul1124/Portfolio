import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiLinkedinBox, mdiGithubCircle, mdiFileAccount } from '@mdi/js';
import './background.scss';

export default function Background() {

  const [ isReady, setIsReady ] = useState('100%');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

    return (
        <div className="background" onScroll={handleScroll} style={{width: isReady}}>
            <div className="background-image-container">
                <figure className="background-image"></figure>
            </div>
            <div className="background-content">
                <div className="background-content-container">
                    <h2 className="background-title">Hey. I'm&nbsp;Paul.</h2>
                    <p className="background-description">Front-End/Full-Stack Web&nbsp;Developer</p>
                    <div className="background-links">
                        <a href="https://www.linkedin.com/in/paulhong931124" className="background-link">
                            <Icon path={mdiLinkedinBox} title="linkedIn" color="#F7F5E6" />
                        </a>
                        <a href="https://www.github.com/paul1124/" className="background-link">
                            <Icon path={mdiGithubCircle} title="github" color="#F7F5E6" />
                        </a>
                        <a href="" className="background-link">
                            <Icon path={mdiFileAccount} title="resume" color="#F7F5E6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )


  function handleScroll(e) {
    if(window.scrollY < 700) {
      setIsReady('100%');
    } 
    if(window.scrollY > 700) {
      setIsReady('50%');
    }
  }
}