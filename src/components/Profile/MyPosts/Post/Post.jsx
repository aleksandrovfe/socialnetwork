import React from 'react';
import './Post.css';

const Post = props => {
  return (
    props.data.map(el => (
      <div key={el.post}>
        <div className="post-item">{el.post}</div>
        <span className="post-item__likes">Likes - 200</span>
        <div className="btn btn__like">Like</div>
      </div>
    ))
  )
}

export default Post;