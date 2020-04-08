import React from 'react';
import './Post.css';

const Post = props => {
  return (
    props.data.map(el => (
      <div key={el.post}>
        <div className="post-item">{el.post}</div>
      </div>
    ))
  )
}

export default Post;