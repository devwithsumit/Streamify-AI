import axios from "axios";

// const url = 'https://api.themoviedb.org/3/movies/now_playing';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk3YjliMzdmMDUyMDJmNzcxODk5ZWVmNzhkNjE5MyIsIm5iZiI6MTc0MDU3Nzc4OC4yMDgsInN1YiI6IjY3YmYxYmZjZTI2NDIyMzUyZGVmYjQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68gqfGHRxuIsf8cMDAkoIGQ3wYOvwiBgndIWfYxDJ4I'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));

export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_API_Read_Access_Token}`,
    }
})
export default axiosInstance;