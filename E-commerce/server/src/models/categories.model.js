const mongoose=require("mongoose")

const categorieSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Logo:{type:String,required:true},
    Sub_Cat:{type:String,required:true}
})

const Category=mongoose.model("category",categorieSchema)

module.exports=Category