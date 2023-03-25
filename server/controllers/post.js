import express from 'express';
import multer from 'multer';
import fs from 'fs';
const upload = multer({ dest: 'uploads/' })

export  const createPost=(req,res)=>{
    const {originalname,path}=req.file;
    const parts=originalname.split('.');
    const ext=parts[parts.length-1];
    const newPath=path+'.'+ext;
    fs.renameSync(path,newPath);
    // const {}

};