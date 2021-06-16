import './tasto.css';
import tastoImg from '../../images/tasto.jpg'

export default function Tasto() {
    return (
        <div className="tasto">
            <img src={tastoImg} className="tastoImg" alt="tasto" />
            <div className="tastoInfo">
                <div className="tastoSections">
                    <span className="tastoSect">Orchestration Breakdowns</span>
                    <span className="tastoSect">Libraries Used</span>
                </div>
                <span className="tastoTitle">Sul Tasto Kisses</span>
                <hr />
                <span className="tastoDate">1 hour ago</span>
            </div>
            <p className="tastoDescript">
                A romantic 30 second challenge which I thoroughly enjoyed writing, this piece is meant to capture
                the innocence of first love. The sweet moments where the world seems to melt away and it's just you 
                and your spouse kissing in a tree. K I S S I N G. 
            </p>
        </div>
    )
}
