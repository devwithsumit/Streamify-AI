import { useSelector } from 'react-redux'
import { useSearchContext } from '../context/SearchContext';
import MoviesSection from '../components/home/MoviesSection'
import { IoClose } from 'react-icons/io5';
import { IoMdArrowBack, IoMdCloseCircle } from 'react-icons/io';
const SearchPage = () => {
  const { prompt, response, searchedResults } = useSelector(state => state.search);
  // console.log(searchedResults);
  const { isLoading, setIsSearchPage } = useSearchContext();

  return (
    <div className='sm:min-h-[60vh] relative h-auto w-full px-0 sm:px-10'>
      <h1 className='text-md relative sm:text-xl ml-[15%] sm:ml-[30%] dark:text-gray-200 font-semibold'>
      <IoMdCloseCircle
        size={35}
        className="absolute rounded-full bg-white dark:text-black -left-10 sm:-left-[30vw] top-1/2 -translate-y-1/2 cursor-pointer text-3xl p-1"
        onClick={() => setIsSearchPage(false)}
      />
        Search Results for:
        <span className='text-teal-500 inline font-medium'> {prompt}</span>
      </h1>
      {isLoading ? (
        <div className='h-[20vh] flex items-center justify-center'>
          <div className="border-gray-300 ml-2 h-6 border-3 aspect-square animate-spin [animation-duration:.5s] rounded-full border-t-red-600" />
        </div>
      ) :
        (
          <>
            <div className='flex flex-col mt-5 overflow-y-auto'>
              {searchedResults &&  (
                <MoviesSection
                  heading={response?.join(", ")}
                  moviesList={searchedResults}
                />
              )}
            </div>
          </>
        )
      }
    </div>
  )
}

export default SearchPage
