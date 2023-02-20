import React from 'react';
import './Post.css';

function Post() {
  return (
    <div className="post">
        <div className="image">
          <img src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg" />
        </div>

        <div className="texts">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className="info">
            <a className="author">Sajda Kabir</a>
            <time>2023-2-20 23:53</time>

          </p>
          <p className="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus quaerat eius expedita cum, nobis a velit omnis repellat quas consectetur ut vitae quos.</p>
        </div>
      </div>
  )
}

export default Post
