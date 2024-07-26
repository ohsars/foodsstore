import { NavBar } from './NavBar'
// import { Footer } from './Footer'
import { Hero } from './Hero'
import heroBg from "../assets/bggg.avif"

export const Main = () => {
  return (
    <div className='dark:bg-gray-900 bg-white w-full h-screen m-0'>
      <div className='flex mx-auto w-[80vw]'>
        <section style={{backgroundImage: `url("${heroBg}")`}} className='dark:text-white text-gray-900'>
          <NavBar />
        </section>
      </div>
      <Hero />
    </div>
  )
}