import './autumnpost.css';
import Autumn from '../../images/autumn.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function AutumnPost() {

    return (
        <div className="autumnPost">
            <div className="autumnPostWrapper">
                <img src={Autumn} className="autumnPostImg" alt="bebop" />
                <h1 className="autumnPostTitle">
                    Autumn Falls
                    <div className="autumnPostEdit">
                    <i className="autumnPostIcon fas fa-edit"></i>
                    <i className="autumnPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="autumnPostInfo">
                    <span className="autumnPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="autumnPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/EtueyTPEmUA'/>
                </div>
                    <p className="autumnPostDescript">
                    A romantic 30 second challenge which I thoroughly enjoyed writing, this piece is meant to capture
                    the innocence of first love. The sweet moments where the world seems to melt away and it's just you 
                    and your spouse kissing in a tree. K I S S I N G. 
                    <br />
                    There were numerous drafts for this challenge, all of them conveyed the same emotional weight, but had a 
                    different feel to it. I ended going with this draft due to the softness and the aching beauty quality of the 
                    Solo Cello. 
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