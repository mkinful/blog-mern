import './sordino.css';
import sordinoImg from '../../images/sordino.jpg'
import { Link } from 'react-router-dom';

export default function Sordino() {
    return (
        <div className="sordino">
            <img src={sordinoImg} className="sordinoImg" alt="sordino" />
            <div className="sordinoInfo">
                <div className="sordinoSections">
                    <span className="sordinoSect">Orchestral</span>
                    <span className="sordinoSect">Scoring Competition</span>
                </div>
                <span className="sordinoTitle"><Link className="navLink" to="/storm/sord">Hurricaine Sordino</Link></span>
                <hr />
                {/* <span className="sordinoDate">1 hour ago</span> */}
            </div>
            <p className="sordinoDescript">
                Composed as part of a "30 Second Challenge", this monstrous piece of music was that rare moment in which I get 
                to go crazy with the orchestra. Nothing gentle, soft, or beautiful, just pure choas and madness mixed with 
                irritation and anger. 
                
            </p>
        </div>
    )
}
