import './champ.css';
import Champagne from '../../images/smoothj.jpg';

export default function Champ() {
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
                <p className="champPostDescript">
                Composed in June 2012, this piece began life as the bass guitar melody that opens the piece. After 3 and half
                hours, my first Smooth Jazz piece was written and ready to be mixed. 

                The title is a continuation of the first Jazz piece I did called "Beer and Cigarettes", so when it came time for 
                the sequel, "Champagne and Cigars" seems liked a natutral evolution. 
                </p>
            </div>
        </div>
    )
}