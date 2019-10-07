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
                            {/* <p className="post-date">{post.createdAt.substr(0, 10)}</p>
                            <p className="post-time">{post.createdAt.substr(11, 19)}</p> */}
                            {/* <a href="#" onClick={() => handleDelete(post._id)}>Delete</a> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )

    // function handleDelete(id) {
    //     axios.delete('http://localhost:5000/posts/' + id)
    //         .then(res => console.log(res.data));
    //     setPosts(posts.filter(post => post._id !== id));
    //         // .catch(err => res.status(400).json('Error: ' + err));
    // }
}