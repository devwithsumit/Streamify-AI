import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './redux/slices/userSlice'
import { getSerializableUser } from './utils/authUtils'
import { useOnlineStatus } from './utils/useOnlineStatus'
import OfflinePage from './pages/OfflinePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

function App() {
  const online = useOnlineStatus();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(addUser(getSerializableUser(user)));
        navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return ()=>{
      // unsubscribe when component unmounts
      unsubscribe();
    }
  }, [])

  if (!online) {
    return <OfflinePage />
  }
  return (
    <div id='App' className='dark:bg-[#161515] min-h-screen flex flex-col justify-start dark:text-white'>
      <Navbar />
      <div className="mb-auto">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/login' element={<SignIn />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
