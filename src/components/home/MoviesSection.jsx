import MovieCard from "./MovieCard"


const MoviesSection = ({ heading, sectionList }) => {
    // console.log(heading, " ", sectionList);
    return (
        <div className="section">
            <h1 className='text-xl sm:text-2xl font-bold mb-5 capitalize'>
                {heading}
                <span className="font-medium">
                    {sectionList?.length > 0 && ` [${sectionList?.length}]`}
                </span>
            </h1>
            <div className="movie-item-wrapper flex items-center gap-5 overflow-x-auto pb-3">
                {sectionList?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MoviesSection
