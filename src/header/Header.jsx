import '../header/header.css';
import HeaderImg  from '../images/header1.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Celli Writings</span>
                <span className="headerTitleLg">Bass Flute Solos</span>
            </div>
            <img className="headerImg" src={HeaderImg} alt="header" />
        </div>
    )
}
