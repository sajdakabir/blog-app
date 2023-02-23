import expess from 'express';
import cors from 'cors';

const app=expess();


app.use(cors());
app.use(expess.json());

app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    res.json({result:{username,password}})
})

app.listen(5000,(req,res)=>{
    console.log("server running on post 5000");
})