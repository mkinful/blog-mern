import './rocky.css';
import rockyImg from '../../images/rocky.jpg'
import { Link } from 'react-router-dom';

export default function Rocky() {
    return (
        <div className="rocky">
            <img src={rockyImg} className="rockyImg" alt="rocky" />
            <div className="rockyInfo">
                <div className="rockySections">
                    <span className="rockySect">Orchestral</span>
                    <span className="rockySect">Scoring Competition</span>
                </div>
                <span className="rockyTitle"><Link className="navLink" to="train/rocky">Rocky Steps</Link></span>
                <hr />
                {/* <span className="rockyDate">1 hour ago</span> */}
            </div>
            <p className="rockyDescript">
               Keeping in line with scoring iconic movie scenes, this Film Scoring Challenge required the participants to 
               rescore this infamous scene from Rocky, made all the more iconic by Bill Conti's rousing score. 

               My aim was to never attempt to top the original score, but simply approach it my own way, in my own style. 
               The result is what I like to describe as "nerd workout music". Will get you pumped and ready to jog for miles, 
               but only if your idea of a good time is practicing algorithms questions for potential interviews in the future. 
            </p>
        </div>
    )
}
