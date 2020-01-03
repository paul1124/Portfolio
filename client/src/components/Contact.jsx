import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './styles/contact.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-description">Interested in Collaboration?</p>
            <div className="contact-modal">
                <div className="contact-modal-border">
                    <form className="contact-form" action="mailto:paulhong1124@gmail.com">
                        <h2 className="contact-form-intro"><FontAwesomeIcon icon={faPaperPlane} />&nbsp;paulhong1124@gmail.com</h2>
                        <input type="text" className="contact-form-input" placeholder="Name" required/>
                        <input type="email" className="contact-form-input" placeholder="Email" required/>
                        <textarea name="" id="" cols="30" rows="10" className="contact-form-textarea" placeholder="Message" required></textarea>
                        <input type="submit" value="Send" className="contact-form-submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;

// export default function Contact() {
//     // useEffect(() => {
//     //     window.scrollTo(0, 0);
//     //   }, []);
//     return (
//         <section className="contact" id="contact">
//             <h2 className="contact-title">Contact</h2>
//             <p className="contact-description">Interested in Collaboration?</p>
//             <div className="contact-modal">
//                 <div className="contact-modal-border">
//                     <form className="contact-form" action="mailto:paulhong1124@gmail.com">
//                         <h2 className="contact-form-intro"><FontAwesomeIcon icon={faPaperPlane} />&nbsp;paulhong1124@gmail.com</h2>
//                         <input type="text" className="contact-form-input" placeholder="Name" required/>
//                         <input type="email" className="contact-form-input" placeholder="Email" required/>
//                         <textarea name="" id="" cols="30" rows="10" className="contact-form-textarea" placeholder="Message" required></textarea>
//                         <input type="submit" value="Send" className="contact-form-submit"/>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )

// }