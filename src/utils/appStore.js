import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import searchReducer from "./searchSlice"
import configReducer from './configSlice'

const appStore = configureStore({
    reducer: {
        config: configReducer,
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer
    }
})

export default appStore