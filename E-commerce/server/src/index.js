const express=require("express")

const app=express()
app.use(express.json())
const userController=require("./controllers/user.controller")
const brandController=require("./controllers/brands.controller")
const productController=require("./controllers/products.controller")


app.use("/users",userController)
app.use("/brands",brandController)
app.use("/products",productController)

module.exports=app