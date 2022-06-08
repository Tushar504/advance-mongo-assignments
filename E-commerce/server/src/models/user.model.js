const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: false },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Address:[
        {
          line_1: { type: String, required: false },
          city: { type: String, required: false },
          state: { type: String, required: false },
          add_type: { type: String, required: false, default: "home" },
        },
      ],
       Usertype:{type:String,required:true}


},{
    timestamps:true,
    versionKey:false
})

const User=mongoose.model("user",userSchema)
module.exports=User