import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';
import AddNewPostResuxForm from "./Post/AddNewPost/AddNewPost";

const MyPosts = React.memo(props => {
    const addPost = event => {
        props.addPost(event.newPostBody);
    };
    return (
        <div className="main__posts">
            <AddNewPostResuxForm onSubmit={addPost}/>
            <div className="posts-list">
                <Post data={props.PostData}/>
            </div>
        </div>
    )
});

export default MyPosts;