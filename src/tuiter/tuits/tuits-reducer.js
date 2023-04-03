import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuitsThunk";

const initialState = {
    tuits: [],
    loading: false
}


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
    reducers: {
        // changeLike(state, action) {
        //     const post = state.find((post) =>
        //         post._id === action.payload)
        //     post.liked = !post.liked
        //     if (post.liked) {
        //         post.likes = post.likes + 1
        //     } else {
        //         post.likes = post.likes - 1
        //     }
        // },
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // },
        // deleteTuit(state, action) {
        //     const index = state
        //         .findIndex(tuit =>
        //             tuit._id === action.payload);
        //     state.splice(index, 1);
        // }
    },
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }


    },


});

export const {changeLike, createTuit, deleteTuit} = tuitsSlice.actions
export default tuitsSlice.reducer;