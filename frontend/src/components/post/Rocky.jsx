import './rocky.css';
import rockyImg from '../../images/rocky.jpg'

export default function Rocky() {
    return (
        <div className="rocky">
            <img src={rockyImg} className="rockyImg" alt="rocky" />
            <div className="rockyInfo">
                <div className="rockySections">
                    <span className="rockySect">Orchestration Breakdowns</span>
                    <span className="rockySect">Libraries Used</span>
                </div>
                <span className="rockyTitle">Rocky Steps</span>
                <hr />
                <span className="rockyDate">1 hour ago</span>
            </div>
            <p className="rockyDescript">
               Keeping in line with scoring iconic movie scenes, this Film Scoring Challenge required the participants to 
               rescore this infamous scene from Rocky, made all the more iconic by Bill Conti's rousing score. 

               My aim was to never attempt to top the original score, but simply approach it my own way, in my own style. 
               The result is what I like to describe as "nerd workout music". Will get you pumped and ready to jog for miles, 
               but only if your idea of a good time is practicing algorithms. 
            </p>
        </div>
    )
}
