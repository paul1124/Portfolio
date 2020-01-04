import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/social.scss';

const Social = () => {
    return (
        <div className="social">
            <ul className="social-links">
                <a className="social-link" href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a className="social-link" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="social-link" href=""><FontAwesomeIcon icon={faPalette} /></a>
                <a className="social-link" href=""><FontAwesomeIcon icon={faPalette} /></a>
                <a className="social-link" href=""><FontAwesomeIcon icon={faPalette} /></a>
            </ul>
        </div>
    )
}

export default Social;