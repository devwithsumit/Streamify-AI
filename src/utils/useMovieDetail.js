import { useEffect, useState } from "react";
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';

const useMovieDetails = (id)=>{
    const [movieDets, setMovieDets] = useState({});
    useEffect(() => {
        axiosInstance.get('https://api.themoviedb.org/3/movie/' + id)
            .then((response) => {
                console.log(response.data);
                setMovieDets(response.data);
            })
            .catch((error) => {
                toast.error("Error fetching movie details")
                console.log(error);
            })
    }, [id])
    return movieDets;
}
export default useMovieDetails;