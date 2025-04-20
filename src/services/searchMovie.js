import axiosInstance from "../utils/axiosInstance"


export const searchMovie = async (query) =>{
    try {
        const response = await axiosInstance.get("https://api.themoviedb.org/3/search/movie?query=" + query);
        
        return response.data.results;
    } catch (error) {
        console.log(`Error searching for "${query}":`, error);
        return [];
    }
}