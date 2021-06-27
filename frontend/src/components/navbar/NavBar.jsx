import './navbar.css'
import image1 from '../../images/Ein.png';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import { useContext } from 'react';

export const NavBar = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }
    
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
                    <li className="navListItem" onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <Link to="/settings"><img className="mainImg" src={user.profilePic} alt="main" /></Link>
                    ) : (
                        <ul className="navList">
                        <li className="navListItem"><Link className="navLinks" to="/login">Login</Link></li>
                        <li className="navListItem"><Link className="navLinks" to="/register">Register</Link></li>
                        </ul>
                    )
                }

                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
