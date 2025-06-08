import { useMovies } from '../../services/useMovies';
import MoviesSection from './MoviesSection';

const MainContainer = () => {

    const sectionList = useMovies();
    return (
        <div className='space-y-5 pb-10'>
            <MoviesSection heading={"trending"} sectionList={sectionList?.trending} />
            <MoviesSection heading={"now playing"} sectionList={sectionList?.nowPlaying} />
            <MoviesSection heading={"Upcoming"} sectionList={sectionList?.upcoming} />
            <MoviesSection heading={"popular"} sectionList={sectionList?.popular} />
        </div>
    )
}

export default MainContainer
