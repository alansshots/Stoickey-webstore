import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react';
import 'tw-elements';

import Keyboard from '../assets/keyboard.png'
import Arrow from './Arrow'

const Shop = () => {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  // const [itemsCount, setItemsCount] = useState()

  // const handleCount = (number) => {
  //    setItemsCount(number + 1);

  //    console.log(itemsCount);
  //  };

  return (
    <>
    {/* Shoping cart modal */}
    <AnimatePresence>
    {isShown && (
         <motion.div 
         initial={{
          opacity:0,
         }}
         animate={{
          opacity:1,
         }}
         exit={{
          opacity:0,
          transition:{
            duration:0.3,
            ease: "easeInOut"
          }
         }}
         transition={{
          duration:0.2,
          ease: "easeInOut"
         }}
         className="relative z-10 shoping-cart" aria-labelledby="slide-over-title" role="dialog">
         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
       
         <div className="fixed inset-0 overflow-hidden">
           <div className="absolute inset-0 overflow-hidden">
             <motion.div
             key='box'
             initial={{
              x:500
             }}
             animate={{
              x:0
             }}
             exit={{
              x:500,
              transition:{
                duration:0.4
               }
             }}
             transition={{
              duration:0.4
             }}
             className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
               <div className="pointer-events-auto w-screen max-w-md">
                 <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                   <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                     <div className="flex items-start justify-between">
                       <h2 className="text-xl font-bold uppercase text-black" id="slide-over-title">Shopping cart</h2>
                       <div className="ml-3 flex h-7 items-center">
                         <button onClick={handleClick}  type="button" className="-m-2 p-2 text-black font-bold hover:scale-95 hover:text-gray-500">
                           <span className="sr-only">Close panel</span>
                           {/* <!-- Heroicon name: outline/x-mark --> */}
                           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                           </svg>
                         </button>
                       </div>
                     </div>
       
                     <div className="mt-8">
                       <div className="flow-root">
                         <ul role="list" className="-my-6 divide-y divide-gray-200">
                           <li className="flex py-6">
                             <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                               <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
                             </div>
       
                             <div className="ml-4 flex flex-1 flex-col">
                               <div>
                                 <div className="flex justify-between text-base font-medium text-gray-900">
                                   <h3 className='font-bold'>
                                     Throwback Hip Bag
                                   </h3>
                                   <p className="ml-4 font-bold">$24.99</p>
                                 </div>
                                 <p className="mt-1 text-sm text-gray-500">STOICKEY</p>
                               </div>
                               <div className="flex flex-1 items-end justify-between text-sm">
                                 {/* <p className="text-gray-500">Qty:
                                 <input type="number" min="0" className='ml-1 w-8 outline-none' />
                                 </p> */}
       
                                 {/* <div className="flex">
                                   <button type="button" className="font-medium text-red-800 hover:text-red-700 hover:scale-95 duration-200">Remove</button>
                                 </div> */}
                               </div>
                             </div>
                           </li>
       
                           {/* <!-- More products... --> */}
                         </ul>
                       </div>
                     </div>
                   </div>
       
                   <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                     <div className="flex justify-between text-base font-medium text-black">
                       <p className='font-bold text-md uppercase'>Subtotal</p>
                       <p className='font-bold'>$89.99</p>
                     </div>
                     <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                     <div className="mt-6">
                       <a href='https://buy.stripe.com/test_dR6aHr4bP5KmaqIeUU' className="flex items-center justify-center rounded-md border-2 border-black bg-white px-6 py-3 text-lg uppercase text-black font-bold text-white shadow-sm hover:bg-black hover:text-white hover:scale-95 duration-200">Checkout</a>
                     </div>
                     {/* <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                       <p>
                         or
                         <button type="button" className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
                           Continue Shopping
                           <span aria-hidden="true"> &rarr;</span>
                         </button>
                       </p>
                     </div> */}
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </motion.div>
      )}
      </AnimatePresence>

      {/* 👇️ show component on click */}
      {isShown}

    {/* Shop section */}
    <div id='Shop' className='sbg flex flex-col items-center justify-center'>
<div className=''>
    <div className='text-white text-center text-2xl sm:text-5xl mt-10 w-3/4 m-auto'>
        <h1 className='font-thin'>“First say to yourself what you would be, 
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
            <h1 className='text-3xl sm:text-5xl font-bold my-5 text-center'>STOICKEY <span className='italic'>ZENO</span></h1>
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
            <span className='text-2xl sm:text-3xl mr-10'>$24.99</span>
            <motion.button onClick={handleClick}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='border-2 border-white rounded-xl px-6 py-1 m-1 text-md sm:text-xl cursor-pointer hover:bg-black hover:text-white duration-200'>
            ORDER NOW
            </motion.button>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Shop