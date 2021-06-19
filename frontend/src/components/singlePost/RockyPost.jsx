import './rockypost.css';
import Rocky from '../../images/rocky.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function RockyPost() {

    return (
        <div className="rockyPost">
            <div className="rockyPostWrapper">
                <img src={Rocky} className="rockyPostImg" alt="bebop" />
                <h1 className="rockyPostTitle">
                    Hurricaine rocky
                    <div className="rockyPostEdit">
                    <i className="rockyPostIcon fas fa-edit"></i>
                    <i className="rockyPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="rockyPostInfo">
                    <span className="rockyPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="rockyPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/FsW5gvkY6Sg'/>
                </div>
                    <p className="rockyPostDescript">
                    Keeping in line with scoring iconic movie scenes, this Film Scoring Challenge required the participants to 
                    rescore this infamous scene from Rocky, made all the more iconic by Bill Conti's rousing score. 

                    My aim was to never attempt to top the original score, but simply approach it my own way, in my own style. 
                    The result is what I like to describe as "nerd workout music". Will get you pumped and ready to jog for miles, 
                    but only if your idea of a good time is practicing algorithms questions for potential interviews in the future. 
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