import "./sidebar.css"
export default function Sidebar(){
    return(
        <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <br/>
                    <img className="A"src="https://media-exp1.licdn.com/dms/image/C4E03AQHD0C2veQ9aMg/profile-displayphoto-shrink_100_100/0/1638290034037?e=1654128000&v=beta&t=rZwxQiHVjiiEIWlzGbXTXSH5cTm4dO40x8P2z0OQXSM"alt="no"/> 
                    <p>My name is Ehsan Salehin </p>
                </div><br/>
                <div className="sidebarItem">
                <span className="sidebarTitle2">CATEGORIES</span> 
                <ul className="sidebarList"><br/>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Programing</li>
                    <li className="sidebarListItem">Art</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">English</li>
                </ul>            
                </div><br/>
                <div className="sidebarItem">
                <span className="sidebarTitle3"> FOLLOW ME</span> 
                    <div className="sidebarSocial"><br/>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                     <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                     <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                     <i className="sidebarIcon fa-brands fa-linkedin"></i>
                    </div>
                </div>
        </div>
    )
}