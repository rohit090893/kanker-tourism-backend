require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const app=express();
const PORT=process.env.PORT || 5000;
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://kanker-tourism-frontend.vercel.app',
    'https://kanker-tourism-frontend-b4mt8pmrq-rohit-aswals-projects.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use("/api/auth",require("./routes/auth"));
app.use("/api/admin",require("./routes/admin"));
app.use("/api/booking",require("./routes/booking"));

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("MongoDB connected");
}).catch(err=>console.log(err));
app.use("/api/destinations",require("./routes/destination"));
app.use("/api/hotels",require("./routes/hotel"));
app.use("/api/users",require("./routes/user"));
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
