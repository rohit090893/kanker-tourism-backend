const router=require("express").Router();
const Destination=require("../models/destination");
const upload= require("../middleware/upload");
const auth=require("../middleware/auth");
const mongoose=require("mongoose");
// router.post("/",async(req,res)=>{
//     const data= await Destination.create(req.body);
//     res.json(data);
// })
router.post("/",auth , upload.array("images",5),async(req,res)=>{
    const images=req.files.map(file=>file.path);
    const data= await Destination.create({...req.body,images});
    res.json(data);
})



router.get("/",async (req,res)=>{
    const places=await Destination.find();
    res.json(places);
})

router.get('/:id',async(req,res)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid destination ID" });
    }
    const place=await Destination.findById(req.params.id);
    res.json(place);
});

module.exports=router;