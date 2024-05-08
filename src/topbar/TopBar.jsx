import { Link } from "react-router-dom"
import "./topbar.css"
export default function TopBar(){
    const user = false;
    return(
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            </div>
            <div className="Center"></div>
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="Link" to ="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="Link" to ="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="Link" to ="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="Link" to ="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                    {user && "LOGOUT"}
                    </li>
                </ul>
            <div className="topRight">
                {
                    user ? (
                       <img className="topImg"src="https://lh3.googleusercontent.com/a-/AOh14GjSWmJq5A3y3K7BV4XCAn2UW0DrGwWbzgMwreFD=s83-c-mo" alt="no" />
                    ) : (
                    <ul className="topList">
                        <li className="topListItem">
                    <Link className="link" to ="/login">LOGIN</Link></li>
                          <li className="topListItem">    
                   <Link className="link" to ="/register">REGISTER</Link>
                         </li>
                   </ul>
                    )}
                <i className="topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div> 
    )
}