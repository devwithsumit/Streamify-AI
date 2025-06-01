import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { addNowPlayingMovies, addPopularMovies, addTrailerMovie, addTrailerVideo, addUpcomingMovies } from "../redux/slices/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const fetchTrailerVideo = (dispatch, movieId) => {
    axiosInstance.get(`/movie/${movieId}/videos`)
        .then((response) => {
            const filteredTrailers = response.data.results.filter((video) => (
                video.type.toLowerCase() === 'trailer'
            ))
            console.log(filteredTrailers);
            dispatch(addTrailerVideo(filteredTrailers[0]));
        })
        .catch((err) => {
            console.log(err);
            toast.error("Error loading Video");
        })
}
export const fetchNowPlayingMovies = (moviesListLength) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (moviesListLength == 0) {
            axiosInstance.get('/movie/now_playing')
                .then((response) => {
                    // console.log(response.data);
                    const nowPlaying = response.data.results;
                    dispatch(addNowPlayingMovies(nowPlaying));
                    const randomIdx = Math.floor(Math.random() * (nowPlaying.length - 1));

                    const trailerMovie = nowPlaying[randomIdx];
                    // console.log(trailerMovie);
                    dispatch(addTrailerMovie(trailerMovie));
                    fetchTrailerVideo(dispatch, trailerMovie.id)
                })
                .catch((err) => {
                    toast.error("Error fetching movies, you can read the console for error");
                    console.log(err);
                })
        }
    }, [])
}

// Upcoming Videos
export const fetchUpcomingMovies = (moviesListLength) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (moviesListLength == 0) {
            axiosInstance.get('/movie/upcoming')
                .then((response) => {
                    // console.log(response.data);
                    dispatch(addUpcomingMovies(response.data.results));
                })
                .catch((err) => {
                    toast.error("Error fetching movies, you can read the console for error");
                    console.log(err);
                })
        }
    }, [])
}
// Popular Videos
export const fetchPopularMovies = (moviesListLength) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (moviesListLength == 0) {
            axiosInstance.get('/movie/popular')
                .then((response) => {
                    // console.log(response.data);
                    dispatch(addPopularMovies(response.data.results));
                })
                .catch((err) => {
                    toast.error("Error fetching movies, you can read the console for error");
                    console.log(err);
                })
        }
    }, [])
}