import React from 'react'

const Navbar = () => {
  return (
    <div id='Navbar' className='py-10 flex flex-row justify-between items-center mx-20 sticky top-0 z-30 bg-transperant'>
        <div>
            <h6 className='text-3xl'>@stoickey</h6>
        </div>
        <div className='flex flex-row justify-around items-center'>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl bg-white'>TIMELINE</a>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl bg-white'>STORY</a>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl bg-white'>PURCHASE</a>
        </div>
    </div>
  )
}

export default Navbar