import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgPath } from '../../config/constants'
import { useSearchContext } from '../../context/SearchContext';

const MovieCard = ({ movie }) => {
    const { setIsSearchPage } = useSearchContext();
    return (
        <Link to={'/movie/' + movie?.id} onClick={() => setIsSearchPage(false)}
            className='border aspect-[10/16] w-44 sm:w-58 backdrop-blur-sm border-gray-300 dark:border-gray-500/50 shadow-md backdrop-opacity-100 flex-shrink-0 rounded-xl overflow-hidden'>
            <div className='aspect-[14/16] w-full rounded '>
                <img className='h-full w-full object-cover' src={baseImgPath + (movie?.backdrop_path ||
                    movie?.poster_path)} alt="Poster" />
            </div>
            <div className="p-2 sm:p-3">
                <h1 className='font-semibold text-sm sm:text-xl whitespace-wrap'>{
                movie?.title?.length > 29 ? movie?.title?.slice(0, 29).concat("...") : movie?.title ? movie?.title : movie?.name
                }</h1>
                <h4 className='text-base'>{movie?.release_date}</h4>
            </div>
        </Link>
    )
}

export default MovieCard
