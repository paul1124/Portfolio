import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelopeSquare, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './styles/contact.scss';

export default function Contact() {

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-description">Interested in Collaboration?</p>
            <div className="contact-modal">
                <div className="contact-modal-border">
                    <form className="contact-form" action="mailto:paulhong1124@gmail.com">
                        {/* <label htmlFor="" className="form-title">Name</label> */}
                        {/* <FontAwesomeIcon className="form-icon" icon={faUser} /> */}
                        <input type="text" className="contact-form-input" placeholder="Name" required/>
                        {/* <label htmlFor="" className="form-title">Email</label> */}
                        {/* <FontAwesomeIcon className="form-icon" icon={faEnvelopeSquare} /> */}
                        <input type="email" className="contact-form-input" placeholder="Email" required/>
                        {/* <label htmlFor="" className="form-title">Message</label> */}
                        {/* <FontAwesomeIcon className="form-icon" icon={faPencilAlt} /> */}
                        <textarea name="" id="" cols="30" rows="10" className="contact-form-textarea" placeholder="Message" required></textarea>
                        <input type="submit" value="Send" className="contact-form-submit"/>
                    </form>
                </div>
            </div>
        </section>
    )

}