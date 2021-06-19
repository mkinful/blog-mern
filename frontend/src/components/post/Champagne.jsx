import './champagne.css';
import smoothImg from '../../images/smoothj.jpg'
import { Link } from 'react-router-dom';

export default function Champagne() {
    return (
        <div className="champagne">
            <img src={smoothImg} className="champagneImg" alt="champagne" />
            <div className="champagneInfo">
                <div className="champagneSections">
                    <span className="champagneSect">Smooth Jazz</span>
                    <span className="champagneSect">Jazz Collection</span>
                </div>
                <span className="champagneTitle"><Link className="navLink" to="/smooth/champ">Champagne and Cigars</Link></span>
                <hr />
                {/* <span className="champagneDate">1 hour ago</span> */}
            </div>
            <p className="champagneDescript">
                Composed in June 2012, this piece began life as the bass guitar melody that opens the piece. After 3 and half
                hours, my first Smooth Jazz piece was written and ready to be mixed. 

                The title is a continuation of the first Jazz piece I did called "Beer and Cigarettes", so when it came time for 
                the sequel, "Champagne and Cigars" seems liked a natutral evolution. 
            </p>
        </div>
    )
}
