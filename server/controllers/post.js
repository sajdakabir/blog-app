import express from 'express';
import multer from 'multer';
import fs from 'fs';
import Post from '../models/Post.js';
const upload = multer({ dest: 'uploads/' })

export  const createPost=async(req,res)=>{
    const {originalname,path}=req.file;
    const parts=originalname.split('.');
    const ext=parts[parts.length-1];
    const newPath=path+'.'+ext;
    fs.renameSync(path,newPath);
    const {title,summary,content}=req.body;
    try {
        const post=await Post.create({
            title,
            summary,
            content,
            cover:newPath,
        });
        res.json(post);
    } catch (error) {
        res.status(400).json(error);
    }

};

export const getAllPosts=async(req,res)=>{
   try {
    const posts=await Post.find();
    res.json(posts);
   } catch (error) {
    res.status(400).json(error);
   }
};