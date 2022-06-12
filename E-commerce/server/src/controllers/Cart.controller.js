const express=require("express")
const router=express.Router()
const Cart=require("../models/cart.model")
router.get("/:id",async(req,res)=>{
    try {
        let cart=await Cart.find({User_ID:{$eq:req.params.id}})
        return res.status(201).send({ data: cart, message: "success" });
    } 
    catch (error) {
        res.status(500).send({ message: "error", error: error.message });
    }
})
router.post('/create/:id',async(req,res)=>{
    try {
        let cart=await Cart.findOne({Product_ID:{$eq:req.params.id}})
        if(cart){
            return  res.status(201).send({message:"Product Already Added To Cart"})
        }
        let data=await Cart.create({
            Product_Name:req.body.Product_Name,
            Product_ID:req.params.id,
            Brand_ID:req.body.Brand_ID,
            Product_Img:req.body.Product_Img,
            Price:req.body.Price,
            Category_ID:req.body.Category_ID,
            User_Id:req.body.User_ID,
            
        })

        return  res.status(201).send({message:"Product Added To Cart"})


    } 
    catch (error) {
        res.status(500).send({ message: "error", error: error.message });
    }
})

module.exports=router