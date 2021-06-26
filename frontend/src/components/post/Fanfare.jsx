import './fanfare.css';
import Comics from '../../images/comic1.jpg'
import { Link } from 'react-router-dom';

export default function Fanfare() {
    return (
        <div className="fanfare">
            <img src={Comics} className="fanfareImg" alt="fanfare" />
            <div className="fanfareInfo">
                <div className="fanfareSections">
                    <span className="fanfareSect">Orchestral</span>
                    <span className="fanfareSect">Superheros</span>
                </div>
                <span className="fanfareTitle"><Link className="navLink" to="/fanfare/comics">Hawkins Bailey Fanfare</Link></span>
                <hr />
                {/* <span className="fanfareDate">1 hour ago</span> */}
            </div>
            <p className="fanfareDescript">
                Written in 2019 for a friend who shares my passion for commic books, this fanfare was mweant to capture the 
                fun, the heroics, the joy and the overall power that these characters can convey be it through the screen, or 
                as they leap from the pages. 
            </p>
        </div>
    )
}
