import React from 'react';
import './Post.css';

const Post = props => {
    return (
        <div>
            <p className="posts__sign">Posts</p>
            <div className="posts-list">
                {props.data.map(el => (
                    <div key={el.post}>
                        <div className="post-item">{el.post}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post;