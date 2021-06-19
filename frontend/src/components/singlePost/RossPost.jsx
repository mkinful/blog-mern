import './rosspost.css';
import Ross from '../../images/ross.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function RossPost() {

    return (
        <div className="rossPost">
            <div className="rossPostWrapper">
                <img src={Ross} className="rossPostImg" alt="bebop" />
                <h1 className="rossPostTitle">
                    Bob Ross
                    <div className="rossPostEdit">
                    <i className="rossPostIcon fas fa-edit"></i>
                    <i className="rossPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="rossPostInfo">
                    <span className="rossPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="rossPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/rFS58qemnek'/>
                </div>
                    <p className="rossPostDescript">
                    Written in the ancient by gone era of 2009, this R&B track was originally composed for a 
                    singer I worked with to sing to, but when she chose a different piece, I deceided to add more
                    detail to the orchestraions and expand the length of the piece. 
                    <br />
                    It begins with ambient sounds which includes a light waterfall, then followed by a Piano paying the melody that 
                    is to come, then soon the Acoustic and Bass Guitars followed by the Celli joins in to compliment the lonely
                    Piano. 
                    <br />
                    The track was originally meant to capture a new relationship so I went with a sweet melody that slowly 
                    evolves over time. It is a long lined melody for sure, but I wanted something that had a beauty and a 
                    a feeling of what could be next for this couple. 
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