const app=require("./index")
const connect=require("./configs/db")
app.listen(1500,async()=>{
    try {
        console.log("listening on port 1500")
        return connect()
    } 
    catch (error) {
        console.log(error)
    }
})