import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"
export default function Settings(){
    return(
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg" alt="no" />
                        <label htmlFor="fileInput">
                        <i className="W fa-solid fa-circle-user"></i>
                        </label>
                        <input className="q"type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label  >Username : <input className="q1" type="text" placeholder="EHSAN"/></label>
                    <label  >Email : <input className="q2" type="email" placeholder="eh.salehin@gmail.com"/></label>
                    <label  >Password : <input className="q3" type="password" /></label>
                    <button className="settingsSubmit">update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}