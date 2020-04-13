import './MyPosts.css';
import {addPost} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    PostData: state.profileReducer.ProfileData,
});

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts);

export default MyPostsContainer;