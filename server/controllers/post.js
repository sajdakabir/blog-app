import express from 'express';
import multer from 'multer';
import fs from 'fs';
import Post from '../models/Post.js';
const upload = multer({ dest: 'uploads/' });
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';


dotenv.config();

const secret = process.env.SECRET;
export const createPost = async (req, res) => {


    try {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        const { token } = req.cookies;
        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;
            const { title, summary, content } = req.body;
            const post = await Post.create({
                title,
                summary,
                content,
                cover: newPath,
                author: info.id,
            });
            res.json(post);
        });

    } catch (error) {
        res.status(400).json(error);
    }

};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        .populate('author',['username'])
        .sort({createdAt:-1})
        .limit(20)
        ;
        res.json(posts);
    } catch (error) {
        res.status(400).json(error);
    }
};