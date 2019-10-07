import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import './styles/guestbook.scss';

export default function Guestbook() {
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res => setPosts(res.data.map(post => post)))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="guestbook-list">
            <h2 className="guestbook-title">Guest Bdook</h2>
            <p className="guestbook-description">Here's what they said about me</p>
            <div className="guestbook-container">
                {posts.map(post => {
                    return (
                        <div className="post" key={post._id}>
                            <h2 className="post-name">{post.name}</h2>
                            <p className="post-message">{post.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}