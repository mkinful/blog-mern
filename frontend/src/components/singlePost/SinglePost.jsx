import './singlepost.css'
import Bebop from '../../images/bebop.jpg'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={Bebop} className="singlePostImg" alt="bebop" />
                <h1 className="singlePostTitle">
                    Soft Mallet, Fast Motor
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Author: <b>Ebo</b> </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDescript">
                    Written in March 2020, this piece was composed to accompany a film music scoring competition
                    in which we had to re-score the opening main titiles for the 2005 Speilberg classic, "Catch Me If You Can".
                    The daunting task for this challenge was writing something that originally had music from the great John Williams. 
                    <br />
                    The piece can be described as "Xylaphone concerto" since it is the dominant instrument that is heard throughout 
                    the piece. The title refers to the Vibraphone which utilizes a Fast Motor for added reverb, and Soft Mallets for a 
                    gentle color that is not too bright.  
                    <br />
                    Written in March 2020, this piece was composed to accompany a film music scoring competition
                    in which we had to re-score the opening main titiles for the 2005 Speilberg classic, "Catch Me If You Can".
                    The daunting task for this challenge was writing something that originally had music from the great John Williams. 
                    <br />
                    The piece can be described as "Xylaphone concerto" since it is the dominant instrument that is heard throughout 
                    the piece. The title refers to the Vibraphone which utilizes a Fast Motor for added reverb, and Soft Mallets for a 
                    gentle color that is not too bright.

                </p>
            </div>
        </div>
    )
}