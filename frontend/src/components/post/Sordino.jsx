import './sordino.css';
import sordinoImg from '../../images/sordino.jpg'

export default function Sordino() {
    return (
        <div className="sordino">
            <img src={sordinoImg} className="sordinoImg" alt="sordino" />
            <div className="sordinoInfo">
                <div className="sordinoSections">
                    <span className="sordinoSect">Orchestration Breakdowns</span>
                    <span className="sordinoSect">Libraries Used</span>
                </div>
                <span className="sordinoTitle">Hurricane Sordino</span>
                <hr />
                <span className="sordinoDate">1 hour ago</span>
            </div>
            <p className="sordinoDescript">
                Composed as part of a "30 Second Challenge", this is a piece I consider to be one of my finest 
                piece of work due to the complexity of the orchestrations, the mixed meters and the changing time signatures. 
            </p>
        </div>
    )
}
