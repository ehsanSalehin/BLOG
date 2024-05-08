const { tryStatement } = require("@babel/types")
const mongoose = require("mongoose")
const { string, required } = require("yargs")

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
);
module.exports = mongoose.model("Category" , CategorySchema);
const monmodel=mongoose.model("cat",CategorySchema);
