import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
    }
})
export default axiosInstance;