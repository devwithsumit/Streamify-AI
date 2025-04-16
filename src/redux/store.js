import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.js";
import moviesSlice from "./slices/moviesSlice";
import searchSlice from "./slices/searchSlice.js";

export const store = configureStore({
    reducer : {
        user: userSlice,
        movies: moviesSlice,
        search: searchSlice,
    }
})