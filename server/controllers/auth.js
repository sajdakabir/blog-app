import mongoose from "mongoose";
import User from '../models/User.js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


dotenv.config();


const salt = process.env.SALT;
const secret=process.env.SECRET;


export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userInfo = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userInfo);
    } catch (error) {
        res.status(400).json(error);
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userInfo = await User.findOne({ username });
        if(!userInfo){
            res.status(400).json('User not found!.')
        }
        const passOk=bcrypt.compareSync(password,userInfo.password);
        if(passOk){
            jwt.sign({username,id:userInfo._id},secret,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json('looking good');
            });

        }else{
            res.status(400).json('Wrong credentials.')
        }

    } catch (error) {
        res.status(400).json(error);
    }
};

export const getProfile=(req,res)=>{
    // res.json('hoo');
    // res.json(req.cookies);
    res.status(200).send({
        message: 'Hello from XharkTank!'
    })
};