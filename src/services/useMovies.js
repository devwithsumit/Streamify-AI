import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { addNowPlayingMovies, addPopularMovies, addTrailerMovie, addTrailerVideo, addTrendings, addUpcomingMovies } from "../redux/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const useMovies = () => {
    const dispatch = useDispatch();
    const sectionList = useSelector(state => state.movies.sectionList);

    const fetchTrailerVideo = async (movieId) => {
        try {
            const response = await axiosInstance.get(`/movie/${movieId}/videos`);
            const filteredTrailers = response.data.results.filter(video =>
                video.type.toLowerCase() === 'trailer'
            );
            // console.log(filteredTrailers);
            dispatch(addTrailerVideo(filteredTrailers[0]));
        } catch (err) {
            console.error(err);
            toast.error("Error loading Video");
        }
    }

    const fetchMovies = async (apiEndPoint, action, section) => {
        if (sectionList[section].length == 0) {
            try {
                const response = await axiosInstance.get(apiEndPoint)
                const results = response.data.results;
                dispatch(action(results));

                if (section === 'trending') {
                    const randomIdx = Math.floor(Math.random() * (results.length - 1));
                    const trailerMovie = results[randomIdx];

                    dispatch(addTrailerMovie(trailerMovie));
                    await fetchTrailerVideo(trailerMovie?.id);
                }
            } catch (error) {
                toast.error(`Error fetching ${section} movies, read the console to see the error`);
                console.log(error);
            }
        }
    }

    useEffect(() => {
        fetchMovies('/trending/movie/week', addTrendings, 'trending');
        fetchMovies('/movie/now_playing', addNowPlayingMovies, 'nowPlaying');
        fetchMovies('/movie/upcoming', addUpcomingMovies, 'upcoming');
        fetchMovies('/movie/popular', addPopularMovies, 'popular');
    }, [])

    return sectionList;
}