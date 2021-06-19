import './sordinopost.css';
import Sordino from '../../images/sordino.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export default function SordinoPost() {

    return (
        <div className="sordinoPost">
            <div className="sordinoPostWrapper">
                <img src={Sordino} className="sordinoPostImg" alt="bebop" />
                <h1 className="sordinoPostTitle">
                    Hurricaine Sordino
                    <div className="sordinoPostEdit">
                    <i className="sordinoPostIcon fas fa-edit"></i>
                    <i className="sordinoPostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="sordinoPostInfo">
                    <span className="sordinoPostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="sordinoPostDate"> 1 hour ago </span>
                </div>

                <div className="musicLink">
                <ReactPlayer controls url='https://youtu.be/G1xzqxUcTsY'/>
                </div>
                    <p className="sordinoPostDescript">
                    Composed as part of a "30 Second Challenge", this monstrous piece of music was that rare moment in which I get 
                    to go crazy with the orchestra. Nothing gentle, soft, or beautiful, just pure choas and madness mixed with 
                    irritation and anger. 
                    <br />
                    The main inspiration for this piece for John Williams' underrated score for Speilberg's "War of the World" and also
                    some Don Davis influence from his "Matrix" scores can be heard to. 
                    <br />
                    The massive Brass section is the heart of this piece 
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