import { useEffect, useState } from 'react'
import { Route, Routes, useActionData } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from './redux/slices/userSlice'

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userDetails);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        if (!userData){
          console.log(user);
          dispatch(addUser(user));
        }
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, [])
  return (
    <div id='App' className='dark:bg-[#161515] min-h-screen flex flex-col justify-start dark:text-white'>
      <Navbar />
      <div className="mb-auto">
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/login' element={<SignIn />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
