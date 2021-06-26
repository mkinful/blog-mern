import './home.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Header from '../header/Header';
import Posts from '../posts/Posts';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=> {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search]);
    return (
        <>
        <Header />
        <div className="home">
            <Posts posts={posts} />
        </div>
        </>
    )
}
