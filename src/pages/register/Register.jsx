import "./register.css"
import { Link } from "react-router-dom"
export default function Register(){
    return(
        <div className="register">
            <form  className="registerForm">
                <span className="registerTitle">
                    Register
                </span>
                <label >Username : </label>
                <input type="text" className="registerInput" placeholder="enter your username " />
                <label >Email : </label>
                <input type="text" className="registerInput" placeholder="enter your email " />
                <label >Password : </label>
                <input type="password" className="registerInput" placeholder="enter your password " />
                <button className="registerButton">Register</button>
            </form>
            <button className="loginButton">
            <Link className="link"to="/login">Login</Link>
            </button>
        </div>
    )
}