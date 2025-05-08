import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './redux/slices/userSlice'
import { getSerializableUser } from './utils/authUtils'
import { useOnlineStatus } from './utils/useOnlineStatus'
import OfflinePage from './pages/OfflinePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import { ToastContainer } from 'react-toastify'
import UpdateProfile from './components/user/UpdateProfile'
import MoviePage from './pages/MoviePage'
import { useSearchContext } from "./context/SearchContext"

function App() {
  const online = useOnlineStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {setIsSearchPage} = useSearchContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser(getSerializableUser(user)));
        navigate("/home");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => {
      // unsubscribe when component unmounts
      unsubscribe();
    }
  }, [dispatch])


  if (!online) {
    return <OfflinePage />
  }

  return (
    <div id='App' className='dark:bg-[#161515] bg-gray-200 text-black min-h-screen flex flex-col justify-start dark:text-white'>
      <ToastContainer />
      <Navbar />
      <div className="mb-auto" onClick={() => setIsSearchPage(false)}>
        <Routes>
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/movie/:id' element={<MoviePage />}/>
        </Routes>
      </div>
      <div onClick={() => setIsSearchPage(false)}>
        <Footer />
      </div>
    </div>
  )
}

export default App
