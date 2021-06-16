import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="formInput" placeholder="Create username"/>
                <label>Email</label>
                <input type="text" className="formInput" placeholder="Enter email"/>
                <label>Password</label>
                <input type="password" className="formInput" placeholder="Enter password"/>
                <button className="loginButton">Register</button>
            </form>
            <button className="registerButton"><Link className="navLinks" to="/login">Login</Link></button>
        </div>
    )
}