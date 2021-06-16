import './header.css'
import HeaderImg  from '../../images/header1.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Orchestration Details</span>
                <span className="headerTitleLg">Orignal Compositions</span>
            </div>
            <img className="headerImg" src={HeaderImg} alt="header" />
        </div>
    )
}
