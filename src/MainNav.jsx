import './mainnav.css';

export const MainNav = () => {
    return (
        <div className="main-nav">
            <div className="navLeft"><i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
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
                <img className="mainImg" src="" alt="main" />
                <i className="searchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
