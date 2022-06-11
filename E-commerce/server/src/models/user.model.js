const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: false },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Address:[
        {
          Street: { type: String, required: false },
          City: { type: String, required: false },
          State: { type: String, required: false },
          Add_type: { type: String, required: false, default: "home" },
        },
      ],
    


},{
    timestamps:true,
    versionKey:false
})

const User=mongoose.model("user",userSchema)
module.exports=User