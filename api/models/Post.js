const { tryStatement } = require("@babel/types")
const mongoose = require("mongoose")
const { string, required } = require("yargs")

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:false
        },
        username:{
            type:String,
            required:true
        },
        categories:{
            type:Array,
            required:false
        }},
    {timestamps:true}
);
module.exports = mongoose.model("Post" , PostSchema);
const monmodel=mongoose.model("post",PostSchema);
