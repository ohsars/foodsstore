import { useState } from 'react'
import { styles } from '../styles/styles'

export const NavBar = () => {
  const navLinks = ["Home", "Menu", "Service", "Shop"]
  const [count, setCount] = useState(0);

  return (
    <div className='justify-center items-center mx-auto'>

      <nav className='w-[80vw] mt-5 flex justify-around items-center text-sm'>

        <div className='text-xl text-gray-600 font-bold '>meeChow🍍🍅</div>

        <ul className='justify-center flex gap-12'>

        {navLinks.map((links, index) => (
          <li key={index} className='first:font-bold'>{links}</li>))}
      </ul>

        <div className='flex gap-6'>
          <span>🔍</span>
          <span onClick={() => setCount((count) => count + 1)} className='relative cursor-pointer'>🛒 <span className='bg-red-700 text-white rounded-full px-2 align-text-top bottom-3 left-4 text-[8px] absolute'>{count}</span></span>
        </div>

        <section className='flex gap-4 text-[12px]'>
          <button className={`${styles.signInButton}`}><span className='pr-2'>🧑🏾</span>Sign In</button>

          <button className={`${styles.logInButton}`}><span className='pr-2'>🗝️</span>Login</button>
        </section>
      </nav>
    </div>
  )
}
