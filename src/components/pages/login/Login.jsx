import '../login/login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="formInput" placeholder="Enter email"/>
                <label>Password</label>
                <input type="password" className="formInput" placeholder="Enter password"/>
                <button className="loginButton">Login</button>
            </form>
                <button className="registerButton"><Link className="navLinks" to="/register">Register</Link></button>
        </div>
    )
}
