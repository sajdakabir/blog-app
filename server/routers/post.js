import express from 'express';
import {createPost,getAllPosts,getPostById} from '../controllers/post.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })


const router=express.Router();

router.post('/post', upload.single('file'),createPost);
router.get('/post',getAllPosts);
router.get('/post/:id',getPostById);


export default router;