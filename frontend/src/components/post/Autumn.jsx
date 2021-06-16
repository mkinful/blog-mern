import './autumn.css';
import autumnImg from '../../images/autumn.jpg'

export default function Autumn() {
    return (
        <div className="autumn">
            <img src={autumnImg} className="autumnImg" alt="autumn" />
            <div className="autumnInfo">
                <div className="autumnSections">
                    <span className="autumnSect">Orchestration Breakdowns</span>
                    <span className="autumnSect">Libraries Used</span>
                </div>
                <span className="autumnTitle">Autumn Falls</span>
                <hr />
                <span className="autumnDate">1 hour ago</span>
            </div>
            <p className="autumnDescript">
               This was actually the first of the "30 Second Challenge" I competed in. I wanted the piece to reflect
               the fall weather season whiles capturing the optism of the upcoming holidays. The food, the family, 
               the new year's resolutions that you promise you will "totally" keep this time. Totally. 
            </p>
        </div>
    )
}
