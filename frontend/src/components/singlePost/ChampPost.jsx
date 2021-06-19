import './champpost.css';
import Champagne from '../../images/smoothj.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function ChampPost() {
    
    return (
        <div className="champPost">
            <div className="champPostWrapper">
                <img src={Champagne} className="champPostImg" alt="bebop" />
                <h1 className="champPostTitle">
                    Champagne and Cigars
                    <div className="champPostEdit">
                    <i className="champPostIcon fas fa-edit"></i>
                    <i className="champPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="champPostInfo">
                    <span className="champPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="champPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/VDt_Yjji_Io'/>
                </div>

                <p className="champPostDescript">
                Composed in June 2012, this piece began life as the bass guitar melody that opens the piece. After 3 and half
                hours, my first Smooth Jazz piece was written and ready to be mixed. 

                The title is a continuation of the first Jazz piece I did called "Beer and Cigarettes", so when it came time for 
                the sequel, "Champagne and Cigars" seems liked a natutral evolution. 
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