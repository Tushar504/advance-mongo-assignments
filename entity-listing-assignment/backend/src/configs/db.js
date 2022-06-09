const mongoose=require("mongoose")


const connect=()=>{
    return mongoose.connect("mongodb+srv://tush:ahire98@entitylisting.pyzjw.mongodb.net/entitylisting?retryWrites=true&w=majority")
}
module.exports=connect