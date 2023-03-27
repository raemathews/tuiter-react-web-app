import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        changeLike(state, action) {
            const post = state.find((post) =>
                post._id === action.payload)
            post.liked = !post.liked
            if (post.liked) {
                post.likes = post.likes + 1
            } else {
                post.likes = post.likes - 1
            }
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {changeLike, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;