import React from 'react';
import './Post.css';
import {format } from 'date-fns';

function Post({title,summary,cover,content,createdAt}) {
  return (
    <div className="post">
        <div className="image">
          <img src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg" />
        </div>

        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Sajda Kabir</a>
            <time>{format(new Date(createdAt), 'yyyy-MM-dd, HH:mm')}</time>

          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
  )
}

export default Post
