import React from 'react';
import './styles/contact.scss';

export default function Contact() {

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-description">Interested in Collaboration?</p>
            <div className="contact-modal">
                <form className="form" action="mailto:paulhong1124@gmail.com">
                    {/* <label htmlFor="" className="form-title">Name</label> */}
                    <input type="text" className="form-input" placeholder="Name" required/>
                    {/* <label htmlFor="" className="form-title">Email</label> */}
                    <input type="email" className="form-input" placeholder="Email" required/>
                    {/* <label htmlFor="" className="form-title">Message</label> */}
                    <textarea name="" id="" cols="30" rows="10" className="form-textarea" placeholder="Message" required></textarea>
                    <input type="submit" value="Send" className="form-submit"/>
                </form>
            </div>
        </section>
    )

}