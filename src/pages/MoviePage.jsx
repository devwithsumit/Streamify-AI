import { useParams } from 'react-router-dom'

import { baseImgPath } from '../config/constants';
import useMovieDetails from '../utils/useMovieDetail';
import { useSearchContext } from '../context/SearchContext';

const MoviePage = () => {
    const { id } = useParams();
    // const [movieDets, setMovieDets] = useState(null);
    const movieDets = useMovieDetails(id);
    const { isLoading } = useSearchContext();
    // console.log(movieDets)
    return (
        <div className='pt-22 sm:global-px min-h-[50vh]'>
            <div className="bg-gradient-to-br dark:from-neutral-900/50 dark:via-neutral-800 dark:to-red-700/20 py-8">
                <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:-mx-4">
                        <div className="md:flex-1 px-0 sm:px-4">
                            <div className="h-[460px] relative rounded-lg bg-gradient-to-r mb-4 shadow-lg">
                                {!isLoading && !movieDets ? (
                                    <div className='h-full w-full flex items-center justify-center'>
                                        No Details found ⚠
                                    </div>
                                ) : (
                                    isLoading ? (
                                        <div className='absolute top-0 left-0 bg-neutral-200 dark:text-white dark:bg-neutral-900 h-full w-full flex items-center justify-center'>
                                            Poster loading
                                            <div className="border-gray-300 ml-2 h-6 border-3 aspect-square animate-spin [animation-duration:.5s] rounded-full border-t-red-600" />
                                        </div>
                                    ) : (
                                        <img className="w-full h-full object-cover opacity-90" src={baseImgPath + (movieDets?.backdrop_path || movieDets?.poster_path)} alt="Movie Image" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="md:flex-1 px-5 text-sm sm:text-base dark:text-red-100">
                            <h2 className="text-2xl font-bold mb-2">
                                {movieDets?.title || "Movie Name"}
                                <span className='font-light ml-2'>{`(${movieDets?.release_date?.slice(0, 4)})`}</span>
                            </h2>
                            <p className="text-sm mb-4 uppercase space-x-1 font-light tracking-wider">
                                <span>{movieDets?.release_date?.split('-').join('/')}</span>
                                <span className='font-bold'>•</span>
                                <span>{`(${movieDets?.origin_country})`}</span>
                                <span className='font-bold'>•</span>
                                <span className='capitalize'>{"Genres"}</span>
                                <span className='font-bold'>•</span>
                                <span className='lowercase'>{movieDets?.runtime + " mins"}</span>
                            </p>
                            <div className="mb-4 space-x-2">
                                <span className="font-semibold">Tagline:</span>
                                <span className=''>{movieDets?.tagline}</span>
                            </div>
                            <div className="mb-2 space-x-2">
                                <span className="font-semibold">Status:</span>
                                <span className='font-semibold text-teal-400'>Released</span>
                                <div className="flex items-center mt-2"></div>
                            </div>
                            <div className="flex mb-4">
                                <div>
                                    <span className="font-semibold">Language:</span>
                                    <span className=" ml-1">{movieDets?.original_language}</span>
                                </div>
                                <div className="ml-4">
                                    <span className="font-semibold ">Rating:</span>
                                    <span className="text-green-500/90 ml-1">{movieDets?.vote_average?.toString().slice(0, 3)}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-semibold ">Overview: </span>
                                <p className="text-sm mt-2">
                                    {movieDets?.overview || " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, et."}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 -mx-1 sm:-mx-3 my-4 sm:px-0 text-base sm:text-[15px]">
                                <div className="w-full sm:w-1/2 sm:px-2 order-1">
                                    <button className="w-full text-red-100 whitespace-nowrap bg-gradient-to-r from-neutral-800 to-red-700 py-2 px-4 rounded-full font-semibold hover:from-neutral-800/90 hover:to-red-700/90 transition-all duration-300 shadow-md">
                                        Mark as Favourite
                                    </button>
                                </div>
                                <div className="w-full sm:w-1/2 sm:px-2 order-2">
                                    <button className="w-full whitespace-nowrap bg-gradient-to-r from-red-200 to-red-100 text-red-800 py-2 px-4 rounded-full font-bold hover:from-red-300 hover:to-red-200 transition-all duration-300 shadow-md">
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage
