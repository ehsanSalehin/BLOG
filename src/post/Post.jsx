import "./post.css"
export default function Post(){
    return(
        <div className="post">
            <img className="postImg"
            src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg"alt="no"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat1">MUSIC</span>
                    <span className="postCat2">LIFE</span>
                </div>
                <span className="postTitle">this is a test</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
                this is a test this is a test this is a test 
            </p>
        </div>
    )
}