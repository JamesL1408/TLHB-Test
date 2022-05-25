import React from 'react'
import Image from 'next/image'
import EventsImg from '../images/EventImage.jpg'

function EventsInfoCard() {
  return (
    <div className='w-full h-min rounded-md flex text-center items-center shadow-md shadow-gray-400 select-none relative'>

        {/* Writing Layer */}
       
        <div className='flex flex-col items-center justify-center px-5 py-5 bg-transparent rounded-md space-y-7 z-20 text-white'>
            <h1 className=' text-xl font-semibold'>Events {'&'} Offers</h1>
            <div className='h-[2px] w-[80%] bg-white'></div>
            <p>Be the first to hear about special offers and promotions, by following us on social media or signing up for our newsletter. </p>
            <a className='py-2 px-4 bg-Classy rounded-md text-xs font-semibold text-Jet font-Roboto shadow-sm shadow-gray-500 transition-all duration-300 hover:bg-Jet hover:text-white ease-in-out border border-white' href="">TAKE A LOOK  {'>'}</a>
        </div>

        {/* Opacity Layer */}
        <div className='absolute w-full h-full rounded-md bg-black bg-opacity-60 top-0 left-0 z-10 '></div>


        {/* Image Layer */}
        <div className='absolute w-full h-full rounded-md  z-0'><Image className='rounded-md z-0' layout='fill' src={EventsImg}/></div>

        
        
    </div>
  )
}

export default EventsInfoCard