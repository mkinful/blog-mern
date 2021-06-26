import './fanpost.css';
import Comics from '../../images/comic1.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function FanPost() {
    
    return (
        <div className="fanPost">
            <div className="fanPostWrapper">
                <img src={Comics} className="fanPostImg" alt="comics" />
                <h1 className="fanPostTitle">
                    Hawkins Bailey Fanfare
                    <div className="fanPostEdit">
                    <i className="fanPostIcon fas fa-edit"></i>
                    <i className="fanPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="fanPostInfo">
                    <span className="fanPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="fanPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/JjGttzTUmQw'/>
                </div>

                <p className="fanPostDescript">
                Written in 2019 for a friend who shares my passion for commic books, this fanfare was meant to capture the 
                fun, the heroics, the joy and the overall power that these characters can convey be it through the screen, or 
                as they leap from the pages. 
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