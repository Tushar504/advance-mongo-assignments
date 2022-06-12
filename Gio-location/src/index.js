const express = require("express")
const RestaurantController = require("./controllers/RestaurantController")
const NeibhourController = require("./controllers/NeighborController")
require("dotenv").config()
const app = express()
app.use(express.json())


app.use("/restaurants",RestaurantController)
// app.use("/",)
app.use("/neibhourhood",NeibhourController)
module.exports = app