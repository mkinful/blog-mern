import './surfing.css';
import surfingImg from '../../images/surfing1.jpg'
import { Link } from 'react-router-dom';

export default function Surfing() {
    return (
        <div className="surfing">
            <img src={surfingImg} className="surfingImg" alt="surfing" />
            <div className="surfingInfo">
                <div className="surfingSections">
                    <span className="surfingSect">Orchestral</span>
                    <span className="surfingSect">Scoring Competition</span>
                </div>
                <span className="surfingTitle"><Link className="navLink" to="/waves/surf">Staccato Surfing</Link></span>
                <hr />
                {/* <span className="surfingDate">1 hour ago</span> */}
            </div>
            <p className="surfingDescript">
                Composed as part of a "30 Second Challenge" from a Composer group on Facebook, this Challenge's goal was to have
                the participants write music to an image within 30 seconds. These short time length ended up being the most
                difficult part of the challenge in that it limited the thematic growth of the piece. 
            </p>
        </div>
    )
}
