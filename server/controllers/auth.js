import mongoose from "mongoose";
import User from '../models/User.js';


export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userInfo = await User.create({ username, password });
        res.json(userInfo);
    } catch (error) {
        res.status(400).json(error);
    }
};