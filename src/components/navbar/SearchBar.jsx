import { useRef } from "react";
import { getMovieSuggestions } from "../../config/geminiAi";
import { searchMovie } from "../../services/searchMovie";
import { useDispatch } from "react-redux";
import { addPrompt, addRespone, addSearchResults } from "../../redux/slices/searchSlice";
import { useSearchContext } from "../../context/SearchContext";
import { IoMdQrScanner, IoMdSend } from "react-icons/io";


const SearchBar = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const {setIsLoading } = useSearchContext();

    const handleSeachFormSubmit = async (e) => {
        e.preventDefault();

        const prompt = inputRef.current.value;
        inputRef.current.value = '';
        dispatch(addPrompt(prompt));
        setIsLoading(true);
        const response = await getMovieSuggestions(prompt);
        
        const movieNameArray = response.text.trim().split(", ");
        // console.log("Gemini Results:", movieNameArray);
        dispatch(addRespone(movieNameArray));
        // Search all movies in parallel
        const searchPromises = movieNameArray.map((movie) => searchMovie(movie))
        const allResults = await Promise.all(searchPromises);

        // Flatten results into a single array (or keep them separate)
        const combinedResults = allResults.flat();

        // const filteredResults = allResults.map(movieArray =>(
        //     movieArray.filter((item) => item.backdrop_path || item.poster_path)
        // )).filter(item => item.length > 0);

        const filteredResults = combinedResults.filter((item)=> item.backdrop_path || item.poster_path);
        // console.log("All movie results:", filteredResults);

        dispatch(addSearchResults(filteredResults));
        setIsLoading(false);
    }
    return (
        <form className="w-full" onSubmit={handleSeachFormSubmit}>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <img className="h-5 my-auto inline" src="./geminiLogo.png" alt="" />
                </div>
                <label htmlFor="default-search"></label>
                <input ref={inputRef} type="search" id="default-search"
                    className="block w-full p-3 px-13 focus:ring-0 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movies with AI..." required />

                <div className="flex items-center absolute end-1 top-1/2 -translate-y-1/2">
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-violet-500 to-blue-500 focus:ring-2 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-700  dark:hover:bg-violet-800 dark:focus:ring-violet-800"
                    >   
                        <span className="hidden sm:inline">Search✨</span>
                        <IoMdSend size={20} className="inline sm:hidden" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;