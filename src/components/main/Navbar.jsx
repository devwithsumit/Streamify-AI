import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import UserDropDown from '../user/UserDropDown';
import MenuDropDown from '../navbar/MenuDropDown';
import SearchBar from '../navbar/SearchBar';
import SearchPage from '../../pages/SearchPage';
import { useSearchContext } from '../../context/SearchContext';
import ThemeToggleButton from "../main/themeToggleButton";
const Navbar = () => {
    const user = useSelector(state => state.user);
    const { isSearchPage, setIsSearchPage } = useSearchContext();


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Logout Successful");
        }).catch((error) => {
            // An error happened.
            toast.error(error);
        });
    }

    return (
        <>
            <nav className="bg-[white]/15 h-fit z-[99] border-gray-200 fixed top-0 left-0 w-full backdrop-blur-xs dark:bg-[#161515]/50 backdrop-opacity-95 p-4 global-px">
                <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto">
                    <Logo className={'h-8 text-sm sm:text-lg order-1'} />
                    {/* User Items */}
                    <div onClick={() => setIsSearchPage(true)} className="w-full sm:max-w-sm md:max-w-1/2 mx-auto order-3 sm:order-2">
                        <SearchBar />
                    </div>
                    {isSearchPage && (
                        <div className='order-5 pb-5 w-full h-auto min-h-[60vh] pt-10 relative overflow-y-auto'>
                            <SearchPage />
                        </div>
                    )}
                    <div className="flex items-center relative order-2 sm:order-3 space-x-2 md:space-x-3 rtl:space-x-reverse">
                        {/* Login & Profile Button */}
                        <div>
                            <ThemeToggleButton />
                        </div>
                        {
                            !user ?
                                <Link to={'/login'} id='get-started' type="button" className="text-white bg-[#d40000] hover:bg-red-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-700/90">
                                    Get started
                                </Link>
                                :
                                <button id="user-menu-button" type="button"
                                    className="flex text-sm bg-gray-800 rounded-full md:ml-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    {/* Profile */}
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-7 sm:w-8 aspect-square rounded-full"
                                        src={user.photoURL || 'defaultProfile.png'} alt="user photo" />
                                </button>
                        }
                        {/* User Drop Down */}
                        <UserDropDown user={user} handleSignOut={handleSignOut} />
                        {/* Menu Button */}
                        <button
                            data-collapse-toggle="navbar-user" type="button"
                            className="inline-flex -mr-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    {/* Drop down Menu Items */}
                    <MenuDropDown />
                </div>
            </nav>
            {/* Offset content below the navbar */}
            {/* {isSearchPage && (
                <div className="relative">
                    <SearchPage />
                </div>
                // <div className='fixed z-[99] w-full top-18 left-0 pt-5 h-screen px-10 bg-[#161515]'>
                // </div>
            )} */}
        </>
    )
}

export default Navbar
