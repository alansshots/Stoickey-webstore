import React from 'react'

const Timeline = () => {
  return (
    <div id='Timeline' className='flex flex-row items-start justify-around'>
        <div>
            <h2 className='font-bold text-3xl md:text-[5rem] mt-5'>TIMELINE</h2>
        </div>
        <div className='w-1/2 flex flex-col items-center justify-center'>
            <div className='w-3/4 mb-20'>
                <h3 className='font-bold text-3xl mb-3'>1 / INITIAL IDEA</h3>
                <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates impedit non at iste laboriosam quis dolor tempora iure!
                 Iste quasi non temporibus illum consectetur. Quaerat ea at odit! Ratione, maxime.
                 </p>
            </div>
            <div className='w-3/4 mb-20'>
                <h3 className='font-bold text-3xl mb-3'>2 / FIRST PROTOTYPE</h3>
                <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates impedit non at iste laboriosam quis dolor tempora iure!
                 Iste quasi non temporibus illum consectetur. Quaerat ea at odit! Ratione, maxime.
                 </p>
            </div>
            <div className='w-3/4 mb-20'>
                <h3 className='font-bold text-3xl mb-3'>3 / LAUNCH DAY</h3>
                <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates impedit non at iste laboriosam quis dolor tempora iure!
                 Iste quasi non temporibus illum consectetur. Quaerat ea at odit! Ratione, maxime.
                 </p>
            </div>
        </div>
    </div>
  )
}

export default Timeline