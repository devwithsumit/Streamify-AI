import MainContainer from '../components/home/MainContainer'
import HeroSection from '../components/home/HeroSection';

const Home = () => {
  return (
    <div className={`block min-h-[100vh] relative`}>
      <HeroSection />
      <div className="w-full global-px relative pt-10 bg-gradient-to-b from-white dark:from-black">
        <MainContainer />
      </div>
    </div>

  )
}

export default Home
