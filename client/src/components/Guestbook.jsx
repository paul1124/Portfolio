import React, { useState ,useEffect, useRef } from 'react';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import axios from 'axios';
import './styles/guestbook.scss';

export default function Guestbook() {
    const node = useRef();
    const [ submitted, setSubmitted ] = useState(false);
    const [ form, setForm ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage, setPostsPerPage ] = useState(5);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('https://paulhong-portfolio.herokuapp.com/posts')
            .then(res => setPosts(res.data.map(post => post)))
            .catch(err => console.log(err));
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="guestbook-list" id="guestbook">
            <div className="guestbook-background"></div>
            <h2 className="guestbook-title">Guestbook</h2>
            <button className="guestbook-toggle" onClick={() => setForm(true)}>Leave a Message</button>
            {
                form ? 
                    <div className="guestbook" id="guestbookform" >
                        <div className="form-border">
                            {
                                !submitted ? 
                            <form className="form"  ref={node} onSubmit={handleGuestbookSubmit}>
                                <h2 className="form-intro">"anonymously" <FontAwesomeIcon icon={faVolumeMute} /></h2>
                                <button className="form-close" onClick={() => setForm(false)}>X</button>
                                <label htmlFor="" className="form-title">Name</label>
                                <input type="text" className="form-input" value={name} onChange={handleNameChange} required/>
                                <label htmlFor="" className="form-title">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-textarea" value={message} onChange={handleMessageChange} required></textarea>
                                <input type="submit" value="Submit" className="form-submit"/>
                            </form>
                            :
                            <form className="form">
                                <h2 className="form-submitted">
                                    Form Submitted
                                </h2>
                            </form>
                        }
                        </div>
                    </div>
                :
                    null
            }
            <div className="guestbook-container">
                {currentPosts.map(post => {
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
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </section>
    )
    function handleGuestbookSubmit(e) {
        e.preventDefault();

        const post = {
            name,
            message
        }

        axios.post('https://paulhong-portfolio.herokuapp.com/posts/add', post)
            .then(res => console.log('Post added!' + res))
            .catch(err => console.log(err))
            .then(setSubmitted(true))
            .then(
                setTimeout(
                    () => {
                        window.location.reload();
                    }, 1000
                )
                    // window.location.reload(), 2000)
            );
        // window.location.reload();
        
    }

    // function handleDelete(id) {
    //     axios.delete('https://paulhong-portfolio.herokuapp.com/posts/' + id)
    //         .then(res => console.log(res.data));
    //     setPosts(posts.filter(post => post._id !== id));
    //         // .catch(err => res.status(400).json('Error: ' + err));
    // }
}