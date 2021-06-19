import './post.css';
import bebopImg from '../../images/bebop.jpg'
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <div className="post">
            <img src={bebopImg} className="postImg" alt="bebop" />
            <div className="postInfo">
                <div className="postSections">
                    <span className="postSect">Big Band/Bebop Jazz</span>
                    <span className="postSect">Film Score Contest</span>
                </div>
                <span className="postTitle"><Link className="navLink" to="/post/bebop">Soft Mallets, Fast Motor</Link></span>
                <hr />
                {/* <span className="postDate">1 hour ago</span> */}
            </div>
            <p className="postDescript">
                Written in March 2020, this piece was composed to accompany a film music scoring competition
                in which we had to re-score the opening main titiles for the 2005 Speilberg classic, "Catch Me If You Can".
                The daunting task for this challenge was writing something that originally had music from the great John Williams. 
                <br />
                The piece can be described as "Xylaphone concerto" since it is the dominant instrument that is heard throughout 
                the piece. The title refers to the Vibraphone which utilizes a Fast Motor for added reverb, and Soft Mallets for a 
                gentle color that is not too bright.  
                <br />
            </p>
        </div>
    )
}
