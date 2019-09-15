import React from 'react';

import './contact.scss';

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-introduction">For more information or potential collaboration, find me at my other accs! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ullam. Or you can email me.</p>
            <div className="contact-log">
                <p className="contact-log-introduction">If you're shy but still have an opinion, let me know what you think through this anonymous guest log.</p>
                <form action="s" className="log-form">
                    <label htmlFor="alias">ALIAS:</label>
                    <input type="text"/>
                    <label htmlFor="MESSAGE">MESSAGE:</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}