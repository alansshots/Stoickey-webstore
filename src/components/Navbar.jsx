import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-scroll"

import Logo from '../assets/logo.png'
import Bag from './Bag'

const Navbar = () => {
  return (
    <div id='Navbar' className='py-10 flex flex-row justify-between items-center mx-20 bg-transperant'>
        <div>
            {/* <h6 className='text-3xl'>@stoickey</h6> */}
            <img src={Logo} alt="" className='w-56' />
        </div>
        <div className='flex flex-row justify-around items-center'>
        <Link className='cursor-pointer'
         activeClass="active"
         to="Timeline"
         spy={true}
         smooth={true}
         offset={-100}
         duration={500}>
        <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='border-2 border-black rounded-xl px-6 m-1 text-xl bg-white hover:bg-black hover:text-white duration-200'>
            TIMELINE
            </motion.a>
        </Link>
        {/* <Link className='cursor-pointer'
        activeClass="active"
        to="Story"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='border-2 border-black rounded-xl px-6 m-1 text-xl bg-white hover:bg-black hover:text-white duration-200'>
            STORY
            </motion.a>
        </Link> */}
           
        <Link className='cursor-pointer'
        activeClass="active"
        to="Shop"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <motion.a
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='border-2 border-black rounded-xl px-6 m-1 text-xl bg-white hover:bg-black hover:text-white duration-200'>
            PURCHASE
            </motion.a>
        </Link>

        {/* <Link className='border-l-2 border-black ml-2 p-2 cursor-pointer '>
          <Bag/>
        </Link> */}

        </div>
    </div>
  )
}

export default Navbar