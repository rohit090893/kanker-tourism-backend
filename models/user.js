const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    role:{
        type:String,
        enum:["superadmin","editor"],
        default:"editor"
    }
});
userSchema.pre("save",async function(){
    if (!this.password) {
        throw new Error("Password is required");
    }
    if(!this.isModified("password")) return ;
    this.password=await bcrypt.hash(this.password,10);
    
})

module.exports= mongoose.model("User",userSchema);