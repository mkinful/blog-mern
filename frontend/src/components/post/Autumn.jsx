import './autumn.css';
import autumnImg from '../../images/autumn.jpg'
import { Link } from 'react-router-dom';

export default function Autumn() {
    return (
        <div className="autumn">
            <img src={autumnImg} className="autumnImg" alt="autumn" />
            <div className="autumnInfo">
                <div className="autumnSections">
                    <span className="autumnSect">Orchestral</span>
                    <span className="autumnSect">Scoring Competition</span>
                </div>
                <span className="autumnTitle"><Link className="navLink" to="/fall/autumn">Autumn Falls</Link></span>
                <hr />
                {/* <span className="autumnDate">1 hour ago</span> */}
            </div>
            <p className="autumnDescript">
               This was actually the first of the "30 Second Challenge" I competed in. I wanted the piece to reflect
               the fall weather season whiles capturing the optism of the upcoming holidays. The food, the family, 
               the new year's resolutions that you promise you will "totally" keep this time.
            </p>
        </div>
    )
}
