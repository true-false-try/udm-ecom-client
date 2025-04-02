import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import {postReducer} from "./reducers/postReducer.js";
import {thunk} from "redux-thunk";

const initialState = {
    posts: {
        posts: [],
        loading: false,
        error: null,
    }
}

const rootReducer = combineReducers({
   posts:postReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)