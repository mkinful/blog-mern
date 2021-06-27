import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // to prevent page from refreshing when user submits
        setError(false);
        try {
            const res = await axios.post('/auth/register', {
                username, email, password,
            });
            res.data && window.location.replace('/login');
        } catch (err) {
          setError(true);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="formInput" placeholder="Create username"
                 onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" className="formInput" placeholder="Enter email"
                 onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" className="formInput" placeholder="Enter password"
                 onChange={e=>setPassword(e.target.value)}/>
                <button className="loginButton">Register</button>
            </form>
            <button className="registerButton"><Link className="navLinks" to="/login">Login</Link></button>
            {error && <span className="spanError">Please try again.</span>}
        </div>
    )
}