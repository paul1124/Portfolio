import React, { useState ,useEffect, useRef, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import axios from 'axios';
import './styles/guestbook.scss';

export default function Guestbook() {
    const node = useRef();
    const myRef = createRef();
    const [ form, setForm ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');
    useEffect(() => {
        axios.get('/posts')
            .then(res => setPosts(res.data.map(post => post)))
            .catch(err => console.log(err));
        // document.addEventListener("mousedown", handleClick);
        // return () => {
        //     document.removeEventListener("mousedown", handleClick);
        // };
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    // const handleClick = e => {
    //     console.log(form);
    //     if(node) {
    //         const domNode = ReactDOM.findDOMNode(node);
    //         if(node.contains)
    //         if(node.current.contains(e.target)) {
    //             return ;
    //         } 
    //         console.log(e.target);
    //         console.log(form);
    //         setForm(false);
    //     }
        
    // }

    // const checkIfContains = e => {
    //     if(myRef.current.contains(e.target)) {
    //         return ;
    //     }
    //     setForm(false);
    // }
    return (
        <section className="guestbook-list" id="guestbook">
            <h2 className="guestbook-title">Guestbook</h2>
            <button className="guestbook-toggle" onClick={() => setForm(true)}>Leave a Message</button>
            {
                form ? 
                    <div className="guestbook" id="guestbookform" >
                        <div className="form-border">
                            <form className="form"  ref={node} onSubmit={handleGuestbookSubmit}>
                                <h2 className="form-intro">"anonymously" <FontAwesomeIcon icon={faVolumeMute} /></h2>
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
                            {/* <button onClick={() => handleDelete(post._id)}>delete</button> */}
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

        axios.post('/posts/add', post, {
            headers: {
                'Content-Type': 'x-www-form-urlencoded',
                // "Access-Control-Allow-Origin": "*"
            }
        })
            .then(() => console.log('Post added!'));

        window.location = '/guestbook';
    }

    function handleDelete(id) {
        axios.delete('/posts/' + id)
            .then(res => console.log(res.data));
        setPosts(posts.filter(post => post._id !== id));
            // .catch(err => res.status(400).json('Error: ' + err));
    }
}