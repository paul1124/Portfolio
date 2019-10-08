import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './styles/home.scss';

const mainStyle = {
    width: 30 + '%'
}
export default function Home() {
    const [ isMain, setIsMain ] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })
    return (
        <section id="home" className="home" style={isMain ? mainStyle : null}>
            <div className="home-content">
                <figure className="home-image"></figure>
                <div className="home-main">
                    <div className="home-main-content">
                        <h2 className="home-title">
                            Paul Hong
                        </h2>
                        <h4 className="home-subtitle">
                            <div className="home-subtitle-underline">Full Stack Developer</div>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    )

  function handleScroll(e) {
    if(window.scrollY < 700) {
      setIsMain(false);
    } else if(window.scrollY > 700) {
      setIsMain(true);
    }
  }
}