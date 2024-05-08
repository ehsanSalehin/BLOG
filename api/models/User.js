const { tryStatement } = require("@babel/types")
const mongoose = require("mongoose")
const { string, required } = require("yargs")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
        default:"",
    },

},
{timestamps:true}
);
module.exports = mongoose.model("User" , userSchema);
const monmodel=mongoose.model("user",userSchema);