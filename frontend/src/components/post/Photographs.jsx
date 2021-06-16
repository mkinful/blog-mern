import './photographs.css';
import photoImg from '../../images/photographs.jpg'

export default function Photographs() {
    return (
        <div className="photographs">
            <img src={photoImg} className="photographsImg" alt="photographs" />
            <div className="photographsInfo">
                <div className="photographsSections">
                    <span className="photographsSect">Orchestration Breakdowns</span>
                    <span className="photographsSect">Libraries Used</span>
                </div>
                <span className="photographsTitle">Old Photographs</span>
                <hr />
                <span className="photographsDate">1 hour ago</span>
            </div>
            <p className="photographsDescript">
                In this latest episode of the "30 Second Challenge", we had to score a photograph of a couple. 
                The image it conjured for me was an old couple reminscing on their youth, so that longing and joy 
                for what was, whiles yet appreciating what life had in store now, lead to this piece. 
            </p>
        </div>
    )
}
