const mongoose=require("mongoose");
const bookingSchema=new mongoose.Schema({
    hotelId:{type:mongoose.Schema.Types.ObjectId,ref:"Hotel"},
    name:String,
    phone:String,
    from:Date,
    persons:Number,
    status:{type:String,default:"pending"}
});

module.exports=mongoose.model("Booking",bookingSchema);
