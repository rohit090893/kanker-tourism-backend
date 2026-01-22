const { timeStamp } = require("console");
const mongoose=require("mongoose");
const destinationSchema=new mongoose.Schema({
    name:String,
    category:String,
    description:String,
    images:[String],
    location:String,
    bestSeason:String,
    googleMap:String,
},{timestamps:true});

module.exports=mongoose.model("Destination",destinationSchema);
