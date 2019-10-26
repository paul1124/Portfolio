import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/footer.scss';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="copyright">
                <p>Built with Love by Paul Hong @2019</p>
            </div>
        </footer>
    )
}