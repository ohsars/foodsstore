import React from 'react'
import { NavBar } from './NavBar'

export const Main = () => {
  return (
    <div className='dark:bg-gray-900 bg-white h-screen w-screen m-0'>
      <div className='flex mx-auto w-[80vw]'>
        <section className='dark:text-white text-gray-900'>
          <NavBar />
        </section>
      </div>
    </div>
  )
}