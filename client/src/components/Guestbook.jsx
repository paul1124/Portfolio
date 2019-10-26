import React, { useState ,useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import './styles/guestbook.scss';

export default function Guestbook() {
    const [ form, setForm ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => setPosts(res.data.map(post => post)))
            .catch(err => console.log(err));
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <section className="guestbook-list" id="guestbook">
            <h2 className="guestbook-title">Guestbook</h2>
            <button className="guestbook-toggle" onClick={() => setForm(true)}>Leave a Message</button>
            {
                form ? 
                    <div className="guestbook">
                        <div className="form-border">
                            <form className="form" onSubmit={handleGuestbookSubmit}>
                                {/* <h2 className="form-title">Your Identity is Secure</h2> */}
                                <button className="form-close" onClick={() => setForm(false)}>X</button>
                                <label htmlFor="" className="form-title">Name</label>
                                <input type="text" className="form-input" value={name} onChange={handleNameChange} required/>
                                <label htmlFor="" className="form-title">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-textarea" value={message} onChange={handleMessageChange} required></textarea>
                                <input type="submit" value="Submit" className="form-submit"/>
                            </form>
                        </div>
                    </div>
                :
                    null
            }
            <div className="guestbook-container">
                {posts.map(post => {
                    return (
                        <div className="post" key={post._id}>
                            <div className="post-id">
                                <h2 className="post-name">{post.name}</h2>
                                <p className="post-date">{moment(post.createdAt).format('h:mma MMM. DD, YYYY')}</p>
                                
                            </div>
                            <div className="post-box">
                                <p className="post-message">{post.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
    function handleGuestbookSubmit(e) {
        e.preventDefault();

        const post = {
            name,
            message
        }

        axios.post('http://localhost:5000/posts/add', post)
            .then(() => console.log('Post added!'));

        window.location = '/portfolio/guestbook';
    }

    function handleDelete(id) {
        axios.delete('http://localhost:5000/posts/' + id)
            .then(res => console.log(res.data));
        setPosts(posts.filter(post => post._id !== id));
            // .catch(err => res.status(400).json('Error: ' + err));
    }
}