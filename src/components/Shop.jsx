import React from 'react'

import Keyboard from '../assets/keyboard.png'
import Arrow from './Arrow'

const Shop = () => {
  return (
    <div id='Shop' className='h-screen sbg flex flex-col items-center justify-center'>
<div className=''>
    <div className='text-white text-center text-5xl mt-10'>
        <h1 className='font-thin'>“First say to yourself what you would be, 
        <br />
        and then do what you have to do.”</h1>
        <h3 className='italic'>- Epictetus</h3>
    </div>
    <div class="flex flex-row items-center justify-center text-white my-20">
        <div className='w-1/2'>
            <img src={Keyboard} alt="" />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold my-5'>STOICKEY <span className='italic'>ZENO</span></h1>
            <div className='my-5 text-lg'>
                <ul>
                    <li>Gateron low profile brown / red switches</li>
                    <li>Sturdy aluminium case</li>
                    <li>Low Profile, Minimal Footprint</li>
                    <li>65% Layout</li>
                    <li>Low Profile double shot PBT keycaps</li>
                </ul>
            </div>
            <div className='my-5'>
            <span className='text-3xl mr-10'>$89.99</span>
            <a href="" className='text-2xl border-2 border-white px-5 py-1 my-5 rounded-xl m-auto'>ORDER NOW</a>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Shop