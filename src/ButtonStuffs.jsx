import React from 'react'
import { useState } from 'react'
import './App.css'
import { styles } from './styles/styles';

export const ButtonStuffs = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <><div  className='grid items-center justify-center mx-auto h-screen '>
    <>
      {(count == 12, count <=30 ) ? <h2 className='text-5xl text-green-500'>Peace is My Babyyyyyyyyyyyyyyyyyyyyyyyyy😀🥰😍💖 </h2> : <h2 className='text-5xl text-blue-800'>Lets Have it ✅💯</h2>}
      <div>
        <button className={`${styles.button}`} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {isLoading ? <h1>Yo! lets load sharparly 🥰</h1> : <h1>Dey Play</h1>}
      {(count >= 20 && count <40) && <button className={`${styles.button}`}>Its about to go down</button>}
    </>
    
    </div></>
  )
}
