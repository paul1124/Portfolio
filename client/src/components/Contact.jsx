import React, { useState } from 'react';
import './styles/contact.scss';

const selected = {
    backgroundColor: 'rgb(255, 95, 95)'
};

export default function Contact() {
    const [ isEmail, setIsEmail ] = useState(true);

    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-modal">
                <div className="modal-buttons">
                    <button onClick={handleClick} style={isEmail ? selected : null} className="toggle-modal">Email</button>
                    <button onClick={handleClick} style={!isEmail ? selected : null} className="toggle-modal">Guest Book</button>
                </div>
                {
                    isEmail ? (
                        <div className="email">
                            <form className="form">
                                <label htmlFor="" className="form-title">Name</label>
                                <input type="text" className="form-input" required/>
                                <label htmlFor="" className="form-title">Email</label>
                                <input type="email" className="form-input" required/>
                                <label htmlFor="" className="form-title">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-textarea" required></textarea>
                                <input type="submit" value="Send" className="form-submit"/>
                            </form>
                        </div>  
                    ) : (
                        <div className="guestbook">
                            <form className="form">
                                <label htmlFor="" className="form-title">Name</label>
                                <input type="text" className="form-input" required/>
                                <label htmlFor="" className="form-title">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-textarea" required></textarea>
                                <input type="submit" value="Submit" className="form-submit"/>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    )
    function handleClick(e) {
        e.preventDefault();
        setIsEmail(!isEmail);
    }

}