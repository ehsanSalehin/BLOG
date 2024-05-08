import Sidebar from "../../sidebar/Sidebar"
import SinglPost from "../singlePost/SinglePost"
import "./single.css"
export default function Single(){
    return(
        <div className="single">
           {/*post*/}
           <SinglPost/>
           <Sidebar/>
        </div>
    )
}