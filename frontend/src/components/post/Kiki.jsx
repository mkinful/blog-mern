import './kiki.css';
import photoImg from '../../images/lullaby1.jpg'
import { Link } from 'react-router-dom';

export default function Kiki() {
    return (
        <div className="kiki">
            <img src={photoImg} className="kikiImg" alt="kiki" />
            <div className="kikiInfo">
                <div className="kikiSections">
                    <span className="kikiSect">Orchestral</span>
                    <span className="kikiSect">Kiki's Diary</span>
                </div>
                <span className="kikiTitle"><Link className="navLink" to="/kiki/lullaby">Kiara's Lullaby</Link></span>
                <hr />
                {/* <span className="kikiDate">1 hour ago</span> */}
            </div>
            <p className="kikiDescript">
                For the sweetest girl in the whole world, this 2019 Lullaby was written for my adorable Niece, Kiara. 
                I wanted the music to be gentle and beautiful, but also capture her ever joyful sense of wonder and curiousity. 
                It starts with a solo Flute playing her main theme which is soon followed by the Oboe playing a Oboe. 
            </p>
        </div>
    )
}
