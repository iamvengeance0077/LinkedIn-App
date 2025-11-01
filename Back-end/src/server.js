import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app=express();

dotenv.config();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("✅ Connected to MONGODB");
}).catch((err)=>{
    console.log("❌ Failed to connect to MONGODB");
})




app.listen(process.env.PORT,()=>{
    console.log(`✅ Server is running on https://localhost:${process.env.PORT}`);
})