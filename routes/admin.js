const router=require("express").Router();
const User=require("../models/user");
const auth=require("../middleware/auth");
const role=require("../middleware/role");

router.post("create-editor",auth,role("superadmin"),async(req,res)=>{
    const {name,email,password}=req.body;
    const user= await user.create({name,email,password,role:"editor"});
    res.json(user);

})

router.get("/",auth,role("superadmin"),async(req,res)=>{
    const admins=await user.find();
    res.json(admins);
})

module.exports=router;
