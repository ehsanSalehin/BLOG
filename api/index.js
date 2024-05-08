const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require ("mongoose");
const authRoute = require ("./routes/auth");
const userRoute = require ("./routes/users");
const postRoute = require ("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blog' ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("connected to mongoDB"));
//cb = call back function
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})

app.use("/api/auth" , authRoute);
app.use("/api/users" , userRoute);
app.use("/api/posts" , postRoute );
app.use("/api/categories",categoriesRoute);


app.listen("3000",()=>{
    console.log("Backend is running...")
})
