import React from 'react'

const Navbar = () => {
  return (
    <div id='Navbar' className='py-10 flex flex-row justify-between items-center mx-20 bg-transperant'>
        <div>
            <h6 className='text-3xl'>@stoickey</h6>
        </div>
        <div className='flex flex-row justify-around items-center'>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl '>TIMELINE</a>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl '>STORY</a>
            <a href="" className='border-2 border-black rounded-xl px-6 m-0.5 text-xl '>PURCHASE</a>
        </div>
    </div>
  )
}

export default Navbar