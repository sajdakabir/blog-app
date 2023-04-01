import express from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import auth from './routers/auth.js';
import post from './routers/post.js';
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


// app.use(cors({credentials:true,origin:'http://localhost:3000'}));

app.use(express.json());
app.use(cookieParser());
dotenv.config();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
  }
  
  app.use(cors(corsOptions)) // Use this after the variable declaration

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from BlogApp!'
    })
});

app.use('/', auth);
app.use('/',post);
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`server running on post ${port}`);
})
