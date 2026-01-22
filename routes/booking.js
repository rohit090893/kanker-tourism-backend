const router=require("express").Router();
const Booking=require("../models/booking");
const auth=require("../middleware/auth");
router.post("/",async(req,res)=>{
    const booking=await Booking.create(req.body);
    res.json({message:"Enquiry Sent"});
});

router.get("/",auth,async(req,res)=>{
    const data=await Booking.find().populate("hotelId");
    res.json(data);
});

module.exports=router;
