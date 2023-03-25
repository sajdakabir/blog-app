import expess from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import auth from './routers/auth.js';
import post from './routers/post.js';
import cookieParser from "cookie-parser";


const app = expess();


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(expess.json());
app.use(cookieParser());
dotenv.config();

connectDB();


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
