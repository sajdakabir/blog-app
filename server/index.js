import expess from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import User from './models/User.js'

const app=expess();


app.use(cors());
app.use(expess.json());
dotenv.config();

connectDB();

app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const userInfo=await User.create({username,password})
    res.json(userInfo);
})
const port=process.env.PORT || 5000; 

app.listen(port,(req,res)=>{
    console.log(`server running on post ${port}`);
})
