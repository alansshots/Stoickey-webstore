import React from 'react'
import { motion } from "framer-motion"
import 'tw-elements';

import Keyboard from '../assets/keyboard.png'
import Arrow from './Arrow'

const Shop = () => {
  return (
    <div id='Shop' className='sbg flex flex-col items-center justify-center'>
<div className=''>
    <div className='text-white text-center text-5xl sm:text-5xl mt-10'>
        <h1 className='font-thin'>“First say to yourself what you would be, 
        <br />
        and then do what you have to do.”</h1>
        <h3 className='italic'>- Epictetus</h3>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center text-white my-10">
        <div className='sm:w-1/2 sm:ml-10'>
            <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div className='mt-5 sm:mt-0 sm:w-1/2 flex flex-col items-center justify-center'>
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
            <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='border-2 border-white rounded-xl px-6 py-1 m-1 text-xl hover:bg-black hover:text-white duration-200'>
            ORDER NOW
            </motion.a>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Shop