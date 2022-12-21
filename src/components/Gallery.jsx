import React from 'react'

import Arrow from './Arrow'
import GalleryFirst from '../assets/gallery(1).jpg'
import GallerySecond from '../assets/gallery(2).jpg'
import GalleryThird from '../assets/gallery(3).jpg'

const Gallery = () => {
  return (
    <div id='Gallery flex flex-col justify-center items-center'>
        <div>
        <div className='text-6xl md:text-[6rem] lg:text-[6rem] flex flex-row items-center justify-around text-left mt-36'>
            <h2 className='font-bold'>
                IT'S Sooo
                <br />
               <span className='italic'>GOOD</span>
            </h2>
            <img src="" alt="" />
        </div>

        <div class="mt-36 mb-64">
                <div class=" space-y-4">
                    <div class="flex items-end justify-center space-x-4 justify-center">
                        <img class="w-32 rounded-lg shadow-lg md:w-3/12" width="200" src={GalleryFirst}  alt="1"/>
                        <img class="w-40 rounded-lg shadow-lg md:w-4/12" width="260" src={GallerySecond} alt="2"/>
                    </div>
                    <div class="flex items-start justify-center ml-10 space-x-4 space-x-">
                        <img class="w-24 rounded-lg shadow-lg md:w-2/12" width="170" src={GalleryThird} alt="3"/>
                        <img class="w-32 rounded-lg shadow-lg md:w-4/12" width="200" src={GalleryFirst} alt="4"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>  

  )
}

export default Gallery