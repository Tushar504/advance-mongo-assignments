const express=require("express")
const User=require("../models/user.model")
const router=express.Router()

router.post("/",async(req,res)=>{
    try {
        const user= await User.findOne({Email:{$eq:req.body.Email}})
        console.log(req.body)
        console.log(user)
        if(user){
              if(user.Password===req.body.Password){
                return   res.status(200).send({ data: user, message: "success" });
              }
        }
        return res.status(200).send({message:"Email Not Registered"})

      
    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})

router.post("/create",async(req,res)=>{
    try {
        let user=await User.findOne({Email:{$eq:req.body.Email}})
       if(user){
         return res.status(201).send({message:"Email Already Registered"})
       }
       user = await User.create(req.body);
       return res.status(201).send({ data: user, message: "success" });
    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec();

        if (!user) {
          return res.status(404).send({ data: user, message: "error", error: "User Not found.." });
        }
        return res.status(200).send({ data: user, message: "success" });
    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})



router.patch("/:id/edit",async(req,res)=>{
    try {
        let user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        return res.status(201).send({ data: user, message: "success" });
        
    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})


router.get("/:id/addresses",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);

        const addresses = user.Address;
    
        return res.status(201).send({ data: addresses, message: "success" });
    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})

router.patch("/:id/addresses/create",async(req,res)=>{
    try {
        const Address= await User.updateOne({ _id: req.params.id },{ $push: { Address: req.body } });
          if (Address.acknowledged === true) {
            const user = await User.findById(req.params.id).lean().exec();
            return res.status(201).send({ data: user.Address, message: "success" });
          }
          return res.status(404).send({ data: Address, message: "error", error: "something went wrong" });
     } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})

router.patch("/:id/addresses/:idx/edit",async(req,res)=>{
    try {
       
        const update = await User.updateOne({ _id: req.params.id, "Address._id": req.params.idx },{ $set: { "Address.$": req.body } });
        if (update.acknowledged === true) {
            const user = await User.findById(req.params.id).lean().exec();
            return res.status(201).send({ data: user.Address, message: "success" });
          }
          return res.status(404).send({ data: update, message: "error", error: "something went wrong" });
         


    } 
    catch (error) {
        res.status(500).send({ data: [], message: "error", error: error.message });
    }
})


module.exports=router