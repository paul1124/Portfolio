import React, { useState } from 'react';
import axios from 'axios';
import './styles/contact.scss';

const selected = {
    backgroundColor: 'rgb(255, 95, 95)'
};

export default function Contact() {
    const [ isEmail, setIsEmail ] = useState(true);
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');

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
                            <form className="form" onSubmit={handleGuestbookSubmit}>
                                <label htmlFor="" className="form-title">Name</label>
                                <input type="text" className="form-input" value={name} onChange={handleNameChange} required/>
                                <label htmlFor="" className="form-title">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-textarea" value={message} onChange={handleMessageChange} required></textarea>
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
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleEmailSubmit(e) {
        e.preventDefault();

    }
    function handleGuestbookSubmit(e) {
        e.preventDefault();

        const post = {
            name,
            message
        }

        console.log(post);

        axios.post('http://localhost:5000/posts/add', post)
            .then(() => console.log('Post added!'));
            // .catch(err => res.status(400).json('Error: ' + err));
    }

}