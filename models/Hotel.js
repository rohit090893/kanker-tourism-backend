const mongoose=require("mongoose");
const hotelSchema= new mongoose.Schema({
    name:String,
    price:Number,
    ratings:Number,
    images:[String],
    contact:String,
    location:String

})

module.exports= mongoose.model("Hotel",hotelSchema);
