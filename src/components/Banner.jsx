import React from 'react'

import Arrow from './Arrow'
import Keyboard from '../assets/keyboard.png'

const Banner = () => {
  return (
    <div id='Banner flex flex-col justify-center items-center'>
        <div>
        <div className='text-6xl md:text-[8rem] lg:text-[12rem] flex flex-row items-center justify-around text-left'>
            <h2 className='font-bold'>
                STOICKEY 
                <br />
               <span className='italic'>ZENO</span>
            </h2>
            <img src="" alt="" />
        </div>
        <div className='text-xl sm:text-2xl flex flex-col items-center justify-center mt-20'>
            <h2>
                INSPIRED BY THE ENGINEERING 
                <br />
                CULTURE OF AACHEN GERMANY.
                <Arrow className='text-left'/>
            </h2>
        </div>
        <div className='flex flex-row items-center justify-end mt-20'>
            <img src={Keyboard} alt="keyboard" />
        </div>
        </div>
    </div>
  )
}

export default Banner