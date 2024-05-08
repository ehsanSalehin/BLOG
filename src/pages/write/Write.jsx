import "./write.css"
export default function Write(){
    return(
        <div className="write">
            <img src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg" alt="no"
            className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="Icon fa-solid fa-circle-plus"></i>
                    </label>
                    <input type="file" id="fileInput"
                    style={{display:"none"}} />
                    <input type="text" placeholder="Title"className="writeInput"
                    autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write here ..." type="text"className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}