import { Link } from "react-router-dom"
import "./login.css"
export default function Login(){
    return(
        <div className="login">
            <form  className="loginForm">
                <span className="loginTitle">
                    Login
                </span>
                <label >Email : </label>
                <input type="text" className="loginInput" placeholder="enter your email " />
                <label >Password : </label>
                <input type="password" className="loginInput" placeholder="enter your password " />
                <button className="loginButton">
                <Link className="link"to="/register">Register</Link>
                </button>
            </form>
            <button className="registerButton">Login</button>
        </div>
    )
}