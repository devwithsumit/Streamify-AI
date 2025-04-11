import { useEffect, useState } from "react";
import axiosInstance from '../utils/axiosInstance';
import { toast } from 'react-toastify';
import { useSearchContext } from "../context/SearchContext";

const useMovieDetails = (id) => {
    const [movieDets, setMovieDets] = useState(null);
    const { setIsLoading } = useSearchContext();
    
    useEffect(() => {
        const fetchMovieDetail = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get('https://api.themoviedb.org/3/movie/' + id)
                // console.log(response)
                setMovieDets(response.data);
            } catch (error) {
                toast.error("Error fetching movie details")
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovieDetail();
    }, [id])
    return movieDets;
}
export default useMovieDetails;