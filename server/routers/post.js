import express from 'express';
import {createPost,getAllPosts} from '../controllers/post.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })


const router=express.Router();

router.post('/post', upload.single('file'),createPost);
router.get('/post',getAllPosts);


export default router;