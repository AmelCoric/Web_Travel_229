import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login") 
        } catch (error) {
            setError(true)
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your username..." required={true} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter Your email..." required={true} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Your password..." required={true} onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" type="submin">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to={"/login"} className="link">Login</Link>
            </button>
            {error && <span style={{color: "red"}}>Something went wrong</span>}
        </div>
    );
}
