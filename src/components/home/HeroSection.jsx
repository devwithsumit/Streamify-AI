import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const trailerMovie = useSelector(state => state.movies.trailerMovie);
    // console.log(trailerMovie);
    
    return (
        <div className='bg-video bg-center bg-cover bg-[url(https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg)] 
            w-full relative flex flex-col global-px max-h-screen h-screen'>
            <div className="div pointer-events-none absolute z-1 opacity-70 w-full min-h-screen bg-gradient-to-r from-black/90 via-black/50 left-0 top-0"></div>
            <div id='yt-background' className="absolute hidden md:block overflow-hidden pointer-events-auto z-0 w-screen h-screen left-0 top-0">
                <iframe className='h-screen w-full scale-[1.3] object-cover' src={`https://www.youtube.com/embed/${trailerMovie?.videoKey}?mute=1&autoplay=1&controls=0&disablekb=0&modestbranding=1&fs=0&rel=0&showinfo=0`}
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allow='autoplay'>
                </iframe>
            </div>
            <div className="details text-white my-auto relative sm:px-20 z-5 space-y-3">
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    {trailerMovie?.title || trailerMovie?.name}
                </h1>
                <p className='font-light sm:w-[26%]'>{trailerMovie?.overview.slice(0, 108).concat("...")}</p>
                <div className="flex items-center gap-2 sm:gap-5">
                    <button className='px-8 sm:px-10 py-2 rounded-md font-semibold bg-white text-black whitespace-nowrap hover:bg-white/90'>
                        <span className='mr-2'>▶</span>
                        Play
                    </button>
                    <Link to={'/movie/' + trailerMovie?.id}>
                        <button className='px-8 sm:px-10 py-2 rounded-md font-semibold bg-white text-black whitespace-nowrap hover:bg-white/90'>
                            <span className='mr-2'></span>
                            More info
                        </button>
                    </Link>
                </div>
            </div>
            <div className="absolute text-white z-10 left-1/2 -translate-x-1/2 bottom-10 text-lg animate-bounce">
                ↓ scroll for more
            </div>
        </div>
    )
}

export default HeroSection
