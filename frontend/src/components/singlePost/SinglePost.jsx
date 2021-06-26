import './singlepost.css'
import Bebop from '../../images/bebop.jpg'
import ReactPlayer from 'react-player';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({})

    useEffect(() => {
    const getPost = async () => {
        const res = await axios('/posts/' + path)
        setPost(res.data)
    };
    getPost();
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo} className="singlePostImg" alt="bebop" />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> 
                        Author: 
                        <Link to={`/?user=${post.username}`} className="navLinks"><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/4tz1L7JhWOo'/>
                </div>
                <p className="singlePostDescript">
                    {post.desc}
                </p>
            </div>
            
                <div className="main-nav">
                    <div className="navCenter">
                        <ul className="navList">
                            <li className="navListItem"><Link className="navLinks" to="/">Home</Link></li>
                            <li className="navListItem"><Link className="navLinks" to="/post/bebop">Compositions</Link></li>
                            <li className="navListItem"><Link className="navLinks" to="/user">Create</Link></li>
                            <li className="navListItem"><Link className="navLinks" to="/about">About Me</Link></li>
                        </ul>
                    </div>

            </div>

        </div>

        
    )
}