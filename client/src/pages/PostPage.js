import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
    const [postInfo, setPostInfo]=useState(null);
    const {id}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/${id}`).then(res=>{
            res.json().then(postInfo=>{
                setPostInfo(postInfo);
            });
        });
       

    },[]);
  return (
    <div>
      post page
    </div>
  )
}

export default PostPage
