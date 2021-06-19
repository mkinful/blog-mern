import './tastopost.css';
import Tasto from '../../images/tasto.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function TastoPost() {

    return (
        <div className="tastoPost">
            <div className="tastoPostWrapper">
                <img src={Tasto} className="tastoPostImg" alt="bebop" />
                <h1 className="tastoPostTitle">
                    Sul Tasto Kisses
                    <div className="tastoPostEdit">
                    <i className="tastoPostIcon fas fa-edit"></i>
                    <i className="tastoPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="tastoPostInfo">
                    <span className="tastoPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="tastoPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://soundcloud.com/user-53527266/sul-tasto-kisses'/>
                </div>
                    <p className="tastoPostDescript">
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