import mongoose from "mongoose";
import { Schema } from "mongoose";

const PostSchema=new Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
},{
    timestamps:true,
});


const PostModel=mongoose.model('Post',PostSchema);

export default PostModel;