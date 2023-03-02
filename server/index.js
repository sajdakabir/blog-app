import expess from 'express';
import cors from 'cors';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
import auth from './routers/auth.js';


const app = expess();


app.use(cors());
app.use(expess.json());
dotenv.config();

connectDB();


app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from XharkTank!'
    })
});

app.use('/', auth);
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log(`server running on post ${port}`);
})
