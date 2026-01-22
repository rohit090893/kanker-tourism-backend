const router=require("express").Router();
const hotels=require("../models/Hotel");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
router.post("/",auth,upload.array("images",5), async(req,res)=>{
    try{
        const images=req.files?req.files.map(f=>f.path):[];
        
        const hotel= await hotels.create({
            name:req.body.name,
            location:req.body.location,
            contact:req.body.contact,
            price:req.body.price,
            rating:req.body.rating,
            images
        });
        res.json(hotel);
    } catch(err){
        console.error("Hotel create error",err);
        res.status(500).json({message:err.message});
    }
    
});

router.get("/",async(req,res)=>{
    const {location}=req.query;
    const filter=location?{location}:{};
    //above two lines are added for nearby hotels;
    const hotelNames=await hotels.find(filter);
    res.json(hotelNames);
});

router.delete("/:id",auth,async (req,res)=>{
    await hotels.findByIdAndDelete(req.params.id);
    res.json({message:"Hotel deleted"});
});

module.exports=router;