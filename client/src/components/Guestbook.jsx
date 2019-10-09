// import React, { useState ,useEffect } from 'react';
// import axios from 'axios';
// import './styles/guestbook.scss';

// export default function Guestbook() {
//     const [ posts, setPosts ] = useState([]);
//     useEffect(() => {
//         axios.get('http://localhost:5000/posts')
//             .then(res => setPosts(res.data.map(post => post)))
//             .catch(err => console.log(err));
//     }, []);
//     return (
//         <section className="guestbook-list" id="guestbook">
//             <h2 className="guestbook-title">Guestbook</h2>
//             <div className="guestbook">
//                             <form className="form" onSubmit={handleGuestbookSubmit}>
//                                 <label htmlFor="" className="form-title">Name</label>
//                                 <input type="text" className="form-input" value={name} onChange={handleNameChange} required/>
//                                 <label htmlFor="" className="form-title">Message</label>
//                                 <textarea name="" id="" cols="30" rows="10" className="form-textarea" value={message} onChange={handleMessageChange} required></textarea>
//                                 <input type="submit" value="Submit" className="form-submit"/>
//                             </form>
//                         </div>
//             <div className="guestbook-container">
//                 {posts.map(post => {
//                     return (
//                         <div className="post" key={post._id}>
//                             <h2 className="post-name">{post.name}</h2>
//                             <p className="post-message">{post.message}</p>
//                             <p className="post-date">{post.createdAt.substr(0, 10)}</p>
//                             <p className="post-time">{post.createdAt.substr(11, 19)}</p>
//                             {/* <a href="#" onClick={() => handleDelete(post._id)}>Delete</a> */}
//                         </div>
//                     )
//                 })}
//             </div>
//         </section>
//     )
//     function handleGuestbookSubmit(e) {
//         e.preventDefault();

//         const post = {
//             name,
//             message
//         }

//         console.log(post);

//         axios.post('http://localhost:5000/posts/add', post)
//             .then(() => console.log('Post added!'));
//             // .catch(err => res.status(400).json('Error: ' + err));

//         window.location = '/';
//     }

//     // function handleDelete(id) {
//     //     axios.delete('http://localhost:5000/posts/' + id)
//     //         .then(res => console.log(res.data));
//     //     setPosts(posts.filter(post => post._id !== id));
//     //         // .catch(err => res.status(400).json('Error: ' + err));
//     // }
// }