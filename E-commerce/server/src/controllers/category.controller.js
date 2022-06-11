const express=require("express")

const Category=require("../models/categories.model")
const router=express.Router()

router.get("/",async(req,res)=>{
    try {
        let categories=await Category.find().lean().exec()

        return res.status(201).send({data:categories,message:"success"})
    } 
    catch (error) {
        return res.status(500).send(error)
    }
})

router.post("/create",async(req,res)=>{
       try {
              let category=await Category.create(req.body)
              res.send(category)
       } 
       catch (error) {
          res.send(error)
       }
})

module.exports=router