import './surfpost.css';
import Surf from '../../images/surfing1.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function SurfPost() {

    return (
        <div className="surfPost">
            <div className="surfPostWrapper">
                <img src={Surf} className="surfPostImg" alt="bebop" />
                <h1 className="surfPostTitle">
                    Staccato Surfing
                    <div className="surfPostEdit">
                    <i className="surfPostIcon fas fa-edit"></i>
                    <i className="surfPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="surfPostInfo">
                    <span className="surfPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="surfPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/m-ETPKjdIPo'/>
                </div>
                    <p className="surfPostDescript">
                        Composed as part of a "30 Second Challenge" from a Composer group on Facebook, this Challenge's goal was to have
                        the participants write music to an image within 30 seconds. These short time length ended up being the most
                        difficult part of the challenge in that it limited the thematic growth of the piece. 
                        <br />
                        For this one, I imagined a "Happy Go Lucky" surfer catching one last wave before the golden sun set for the day. 
                        I wanted the music to capture the joy of the final surf and the almost whimical and magical nature of the moment. 
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