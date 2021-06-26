import './photopost.css';
import Photo from '../../images/photographs.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function PhotoPost() {
    
    return (
        <div className="photoPost">
            <div className="photoPostWrapper">
                <img src={Photo} className="photoPostImg" alt="nostalgia" />
                <h1 className="photoPostTitle">
                    Old Photographs
                    <div className="photoPostEdit">
                    <i className="photoPostIcon fas fa-edit"></i>
                    <i className="photoPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="photoPostInfo">
                    <span className="photoPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="photoPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://soundcloud.com/user-53527266/old-photographs'/>
                </div>

                <p className="photoPostDescript">
                    In this latest episode of the "30 Second Challenge", we had to score a photograph of a couple. 
                    The image it conjured for me was an old couple reminscing on their youth, so that longing and joy 
                    for what was, whiles yet appreciating what life had in store now, lead to this piece. 
                    <br />
                    Memory tends to make things sweeter than it really was, and I wanted the music to have a rosy colored
                    nostalgia to it. We accentuate the good memories, and brush over the bad ones because we realize even 
                    the bad ones were for our good. 
                    <br />
                    This piece for me represents gratefulness and appreciating every moment of life. The orchestrations are 
                    soft and delicate with a gentle Acoustic Guitar to add a sense of "Once Upon A Time" to the music. 
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