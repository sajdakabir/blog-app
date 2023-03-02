import mongoose from "mongoose";
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const salt=process.env.SALT;

export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userInfo = await User.create({ 
            username,
             password:bcrypt.hashSync(password,salt),
             });
        res.json(userInfo);
    } catch (error) {
        res.status(400).json(error);
    }
};