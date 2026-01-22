const router=require("express").Router();
const usersDb=require("../models/user");
const auth=require("../middleware/auth");
const mongoose=require("mongoose");

router.post("/",async(req,res)=>{
    
    try{
        const userData= await usersDb.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            // role:req.body.role

        });
        res.json(userData);
    }
    catch(error){
        console.error("USER CREATE ERROR:", error.message);
        res.status(400).json({
      success: false,
      message: error.message
    });
    }

});

router.get("/",async(req,res)=>{
    const userData=await usersDb.find();
    res.json(userData);
})

module.exports=router;