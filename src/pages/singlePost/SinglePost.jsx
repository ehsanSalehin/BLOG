import "./singlePost.css"
export default function SinglPost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg" alt="no" className="singlePostImg" />
                <h1 className="singlePostTtitle">
                    this is a test this is a test
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen"></i>
                        <i className="singlePostIcon fa-solid fa-eraser"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Ehsan Salehin</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    this is a test this is a test this is a test this is a test  
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test
                    this is a test this is a test this is a test this is a test  
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test   
                    this is a test this is a test this is a test this is a test   
                </p>
            </div>
        </div>
    )
}