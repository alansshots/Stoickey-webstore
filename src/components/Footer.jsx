import React from 'react'
import ArrowUp from './ArrowUp'

const Footer = () => {
  return (
    <div id='Footer'>
        <div className='flex flex-col items-start justify-start mx-10 mt-10'>
            <a href=""><h1 className='text-[10rem] font-bold hover:opacity-50 transition-5'>INSTAGRAM</h1></a>
            <a href=""><h1 className='text-[10rem] font-bold hover:opacity-50 transition-5'>TIK TOK</h1></a>
            <a href=""><h1 className='text-[10rem] font-bold hover:opacity-50 transition-5'>TWITTER</h1></a>
        </div>
        <div className='flex flex-row items-start justify-start'>
            <div className='mx-10 my-10'>
                <h2 className='text-3xl underline my-5'>LOCATION</h2>
                <p className='text-xl'>Luissenstasse 23 Aachen, Germany</p>
            </div>
            <div className='mx-10 my-10'>
                <h2 className='text-3xl underline my-5'>POLICY</h2>
                <div className='flex flex-col'>
                <a href='' className='text-xl'>Payment Methods</a>
                <a href='' className='text-xl'>Shiping Policy</a>
                <a href='' className='text-xl'>Return Policy</a>
                <a href='' className='text-xl'>Personal Data Use Cases</a>
                <a href='' className='text-xl'></a>
                </div>
            </div>
            <div className='mx-10 my-10'>
                <h2 className='text-3xl underline my-5'>SUBSCRIBE</h2>
                <div>
                    <label className='text-xl'>Email*</label>
                    <div>
                        <input type="text" className='border-botom-2 border-black my-2' placeholder='email...'/>
                        <a href="" className='text-xl border-2 border-black px-5 py-1 my-5 rounded-xl mx-5'>SUBSCRIBE</a>
                    </div>
                    <p className='font-bold'>Thank you for subscribing.</p>
                </div>
            </div>
            <div>   
            </div>
        </div>
        <div className='my-10 mx-10 flex flex-row items-center justify-between'>
            <h1 className='text-5xl font-bold'>
                &copy; 2023 MADE WITH LOVE AND 
                <br />
                PASSION BY STOICKEY 
            </h1>
            <a href='Navbar'><ArrowUp/></a>
        </div>
    </div>
  )
}

export default Footer