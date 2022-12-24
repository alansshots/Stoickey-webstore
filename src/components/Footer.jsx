import React from 'react'
import { Link } from "react-scroll";

import ArrowUp from './ArrowUp'

const Footer = () => {
  return (
    <div id='Footer'>
        <div className='flex flex-col items-start justify-start mx-10 mt-10'>
            <a href=""><h1 className='text-5xl sm:text-[7rem] font-bold hover:opacity-50 transition-5'>INSTAGRAM</h1></a>
            <a href=""><h1 className='text-5xl my-5 sm:my-0 sm:text-[7rem] font-bold hover:opacity-50 transition-5'>TIK TOK</h1></a>
            <a href=""><h1 className='text-5xl sm:text-[7rem] font-bold hover:opacity-50 transition-5'>TWITTER</h1></a>
        </div>
        <div className='flex flex-col sm:flex-row items-start justify-start'>
            <div className='mx-10 my-5 sm:my-10'>
                <h2 className='text-3xl underline my-5'>LOCATION</h2>
                <p className='text-xl'>Luissenstasse 23 Aachen, Germany</p>
            </div>
            <div className='mx-10 my-5 sm:my-10'>
                <h2 className='text-3xl underline my-5'>POLICY</h2>
                <div className='flex flex-col'>
                <a href='' className='text-xl'>Payment Methods</a>
                <a href='' className='text-xl'>Shiping Policy</a>
                <a href='' className='text-xl'>Return Policy</a>
                <a href='' className='text-xl'>Personal Data Use Cases</a>
                <a href='' className='text-xl'>Desktop Application</a>
                </div>
            </div>
            <div className='mx-10 my-5 sm:my-10'>
                <h2 className='text-3xl underline my-5'>SUBSCRIBE</h2>
                <div>
                    <label className='text-xl'>Email*</label>
                    <div>
                        <input type="text" className='border-b-2 border-black outline-none my-2' placeholder='example@...'/>
                        <a href="" className='text-md border-2 border-black px-5 py-1 my-5 rounded-xl mx-5'>SUBSCRIBE</a>
                    </div>
                    <p className='font-bold my-4'>Thank you for subscribing.</p>
                </div>
            </div>
            <div>   
            </div>
        </div>
        <div className='my-10 mx-10 flex flex-row items-center justify-between'>
            <h1 className='text-3xl font-bold'>
                &copy; 2023 MADE WITH LOVE AND 
                <br />
                PASSION BY STOICKEY 
            </h1>
            <Link className='cursor-pointer'
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <ArrowUp/>
            </Link>
        </div>
    </div>
  )
}

export default Footer