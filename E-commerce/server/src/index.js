const express=require("express")

var cors = require('cors')
var app = express()
 
app.use(cors())
app.use(express.json())
const userController=require("./controllers/user.controller")
const brandController=require("./controllers/brands.controller")
const productController=require("./controllers/products.controller")
const categoryController=require("./controllers/category.controller")

app.use("/user",userController)
app.use("/brands",brandController)
app.use("/products",productController)
app.use("/category",categoryController)

module.exports=app