import './navbar.css'
import image1 from '../../images/Ein.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const user = true;
    return (
        <div className="main-nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-twitter"></i>
                <i className="navIcon fab fa-instagram"></i>
                <i className="navIcon fab fa-youtube"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem"><Link className="navLinks" to="/">Home</Link></li>
                    <li className="navListItem"><Link className="navLinks" to="/post/bebop">Compositions</Link></li>
                    <li className="navListItem"><Link className="navLinks" to="/user">Create</Link></li>
                    <li className="navListItem"><Link className="navLinks" to="/about">About Me</Link></li>
                    <li className="navListItem">
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <img className="mainImg" src={image1} alt="main" />
                    ) : (
                        <ul className="navList">
                        <li className="navListItem"><Link className="navLinks" to="login">Login</Link></li>
                        <li className="navListItem"><Link className="navLinks" to="register">Register</Link></li>
                        </ul>
                    )
                }

                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
