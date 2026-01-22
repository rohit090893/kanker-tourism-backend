const router=require("express").Router();
//const adminCtrl=require("../controllers/adminController");
const bcrypt=require("bcrypt");
const User=require("../models/user");
const jwt=require("jsonwebtoken");
// router.post("/register",adminCtrl.register);
// router.post("/login",adminCtrl.login);

router.post("/register",async (req,res)=>{
    const {name,email,password}=req.body;
    const user=await User.create({name,email,password});
    res.json(user);
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email});
    if(!user) return res.status(401).json("invalid");
    const match=await bcrypt.compare(password,user.password);
    if (!match) return res.status(401).json("Inavlid");
    const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.json({token,user});
});

module.exports=router;