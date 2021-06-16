import './ross.css';
import rossImg from '../../images/ross.jpg'

export default function Ross() {
    return (
        <div className="ross">
            <img src={rossImg} className="rossImg" alt="ross" />
            <div className="rossInfo">
                <div className="rossSections">
                    <span className="rossSect">Orchestration Breakdowns</span>
                    <span className="rossSect">Libraries Used</span>
                </div>
                <span className="rossTitle">Bob Ross</span>
                <hr />
                <span className="rossDate">1 hour ago</span>
            </div>
            <p className="rossDescript">
                Written in the ancient by gone era of 2009, this R&B track was originally composed for a 
                singer I worked with to sing to, but when she chose a different piece, I deceided to add more
                detail to the orchestraions and expand the length of the piece. 
            </p>
        </div>
    )
}
