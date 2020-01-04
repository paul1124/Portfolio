import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './styles/contact.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h4 className="contact-subheading">What's Next?</h4>
                <h2 className="contact-heading">Get In Touch</h2>
                <p className="contact-description">
                    My status is currently <br/>
                    <span className="contact-description-status">
                        available
                    </span><br/>
                    for freelancing opportunities.
                </p>
                <p className="contact-email">
                    <FontAwesomeIcon className="contact-email-icon" icon={faPaperPlane} />&nbsp;paulhong1124@gmail.com
                </p>

                <a href="mailto:paulhong1124@gmail.com" target="_blank" rel="nofollow noopener noreferrer" className="contact-send">Say Hello</a>
            </div>
        </section>
    )
};

export default Contact;