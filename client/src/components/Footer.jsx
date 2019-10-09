import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles/footer.scss';

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <ul className="footer-links">
                <li className="footer-link"><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li className="footer-link"><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
            <div className="copyright">
                <p>Paul Hong @2019</p>
            </div>
        </footer>
    )
}