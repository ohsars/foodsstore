import { useState } from 'react'
import { styles } from '../styles/styles'

export const NavBar = () => {
  const navLinks = ["Home", "Menu", "Service", "Shop"]
  const [count, setCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false)
  const [inputValue, setInputValue] = useState("")


  return (
    <div className='items-center m-0 select-none sticky top-0 z-50'>

      <nav className='flex mt-3 mx-auto text-sm fixed transition-transform transform-gpu duration-300 rounded-md p-2 gap-2 items-center justify-between w-[80vw]'>

        <div className='text-[15px] dark:text-gray-200 font-bold p-2 rounded-lg   cursor-none select-none hover:bg-white dark:hover:text-gray-600 '>meeChoww
        🍍🍅</div>

        <ul className='justify-center flex flex-1 gap-12 cursor-pointer'>
        {navLinks.map((links, index) => (
          <li key={index} className='first:font-bold'>{links}</li>))}
        </ul>

        <div className='flex gap-6 '>

          <span onClick={() => setCount((count) => count + 1)} className='relative cursor-pointer'>🛒 <span className='bg-red-700 text-white rounded-full px-2 align-text-center bottom-4 left-4 text-[8px] absolute'>{count}</span></span>
          <span className='w-60'>
            <i className='fa fa-search cursor-pointer px-2' onClick={() => setShowSearch(!showSearch)}/>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Search here...' autoFocus type='search' className={ `w-48 bg-transparent border-b active:border-0 placeholder-shown:text-[13px] outline-0 px-2 ${showSearch ? "inline-block" : "hidden"}`}/>
          </span>

          
        </div>

        <section className='flex gap-4 text-[12px]'>
          <button className={`${styles.signInButton}`}><span className='pr-2'><i className='fa fa-user' /></span>Sign In</button>

          <button className={`${styles.logInButton}`}><span className='pr-2 '><i className='fa fa-lock' /></span>Login</button>
        </section>

      </nav>
    </div>
  )
}
