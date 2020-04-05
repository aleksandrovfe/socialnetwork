import {addPost, deletePost, profileReducer} from "./profile-reducer";

const state = {
    ProfileData: [
        {post: 'Hi'},
        {post: 'How Are U?'},
        {post: 'Where are you from?'},
        {post: 'Happy!'},
    ],
};

it('length of posts should be incremented', () => {
    const action = addPost('new post');
    const newState = profileReducer(state, action);

    expect(newState.ProfileData.length).toBe(5);
});


