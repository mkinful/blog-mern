import '../navbar/navbar.css';
import image1 from '../images/sheet1.jpg';

export const NavBar = () => {
    return (
        <div className="main-nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-twitter"></i>
                <i className="navIcon fab fa-instagram"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">Home</li>
                    <li className="navListItem">About</li>
                    <li className="navListItem">Contact</li>
                    <li className="navListItem">Write</li>
                    <li className="navListItem">Account</li>
                </ul>
            </div>
            <div className="navRight">
                <img className="mainImg" src={image1} alt="main" />
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
