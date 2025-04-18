import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        trailerMovie: null,
        sectionList: {
            trending: [],
            nowPlaying: [],
            upcoming: [],
            popular: [],
        }
    },
    reducers: {
        addTrailerMovie: (state, action) => {
            // console.log(action.payload);
            state.trailerMovie = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerMovie = {
                ...state.trailerMovie,
                videoKey: action.payload.key
            }
        },
        addTrendings: (state, action) => {
            state.sectionList.trending = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.sectionList.nowPlaying = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.sectionList.upcoming = action.payload
        },
        addPopularMovies: (state, action) => {
            state.sectionList.popular = action.payload
        },
    }
})

export const { addTrendings, addNowPlayingMovies, addTrailerMovie, addTrailerVideo, addUpcomingMovies, addPopularMovies } = moviesSlice.actions;

export default moviesSlice.reducer;