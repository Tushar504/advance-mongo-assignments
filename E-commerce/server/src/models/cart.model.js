const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({

    Product_Name:{type:String,required:true},
    Product_ID:{type:String,required:true},
    Brand_ID:{type:mongoose.Schema.Types.ObjectId,ref:"brand",required:true},
    Product_Img:{type:String,required:true},
    Price:{type:Number,required:true},
    Category_ID:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true},
    User_Id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    count:{type:Number,required:false,default:1}
})

const Cart=mongoose.model("cart",cartSchema)

module.exports=Cart