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
                    The piece can be somewhat described as "Xylaphone concerto" due in large part to the dominance of the instrument throughout
                    the piece. The title refers to the Vibraphone which utilizes a Fast Motor for added reverb, and Soft Mallets for a 
                    gentle color that is not too bright.  
                    <br />
                    It features a solo woodwinds from Picollo, Flute, Alto Flute, Clarinet in Eb, Bass Clarinet and Contrabasson. 
                    For the brass section, it consists of 3 muted Trumpets, 1 with a harmon mute halfway in, 1 with the harmon mute all the way in and 1 with a cup mute all the way in. 
                    Included with the trumpets is a Bass Trumpet which is meant to give a slightly brighter color to the low brass section. 
                    The Trombone family consists of 2 Trombones and 2 Bass Trombones unmuted, followed by 2 trombones and 2 bass trombones which are muted. 
                    Much like the Brass section they are split into harmon mutes all the way in, and some halfway in for different textures. 
                    <br />
                    The percussion section cosists of a 1 Xylaphone, 1 Toy Xylaphone, Glass Marimba, Glockenspiel, Hi Hat, Shaker, Bongo Drums,
                    and a Woodblock. 
                    <br />
                    Rounding up the ensemble is a solo double bass which is played as pizzicato from begining to end. 
                    <br />
                    FL Studio was the interface used for this due to the tempo and time signature never changing. For pieces that require
                    mixed meters and dynamic tempos, I usually prefer Pro Tools, but for a piece such as this, FL Studio was preffered since 
                    I do work faster with FL Studio due to the speed and the smoothness for the user interface. 
                </p>
            </div>
        </div>
    )
}