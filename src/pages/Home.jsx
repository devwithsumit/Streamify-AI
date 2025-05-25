import React, { useEffect } from 'react'
import SignIn from './SignIn'

const Home = () => {

  return (
    <div className={`min-h-[100vh] **:not-[]:relative pt-28 global-px bg-center bg-cover bg-[url(https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg)]`}>
      <div className="div absolute z-0 w-full h-full bg-gradient-to-r from-black/88 via-black/75 to-black/1 left-0 top-0"></div>
      <div className="w-full relative">
        {/* Home */}
        <SignIn />
      </div>
    </div>

  )
}

export default Home
