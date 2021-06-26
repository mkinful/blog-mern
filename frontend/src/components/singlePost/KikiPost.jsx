import './kikipost.css';
import Kiki from '../../images/lullaby1.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function KikiPost() {
    
    return (
        <div className="kikiPost">
            <div className="kikiPostWrapper">
                <img src={Kiki} className="kikiPostImg" alt="bebop" />
                <h1 className="kikiPostTitle">
                    Kiara's Lullaby
                    <div className="kikiPostEdit">
                    <i className="kikiPostIcon fas fa-edit"></i>
                    <i className="kikiPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="kikiPostInfo">
                    <span className="kikiPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="kikiPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/4R0stjMdJHQ'/>
                </div>

                <p className="kikiPostDescript">
                For the sweetest girl in the whole world, this 2019 Lullaby was written for my adorable Niece, Kiara. 
                I wanted the music to be gentle and beautiful, but also capture her ever joyful sense of wonder and curiousity. 
                It starts with a solo Flute playing her main theme which is soon followed by the Oboe playing a Oboe. 
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