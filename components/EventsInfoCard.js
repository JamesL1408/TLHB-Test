import React from 'react'
import Image from 'next/image'
import EventsImg from '../images/EventImage.jpg'
import EventsImg2 from '../images/meats.jpg'

function EventsInfoCard() {
  return (
    <div >

        {/* Writing Layer */}
       <a href="https://www.facebook.com/theLondonHousebutchery/" target='_blank' className='w-full h-min rounded-md flex text-center items-center shadow-md shadow-gray-400 select-none relative group'>
        <div className='flex flex-col items-center justify-center px-5 py-5 bg-transparent rounded-md space-y-7 z-20 text-white group-hover:opacity-40 transition-all duration-500 ease-in-out '>
            <h1 className=' text-xl font-semibold'>Events {'&'} Offers</h1>
            <div className='h-[2px] w-[80%] bg-white'></div>
            <p>Be the first to hear about special offers and promotions, by following us on social media or signing up for our newsletter. </p>
            <a className='py-2 px-4 bg-Classy rounded-md text-xs font-semibold text-Jet font-Roboto shadow-sm shadow-gray-500  border border-white' href="https://www.facebook.com/theLondonHousebutchery/" target='_blank'>TAKE A LOOK  {'>'}</a>
        </div>

        {/* Opacity Layer */}
        <div className='absolute w-full h-full rounded-md bg-black bg-opacity-70 top-0 left-0 z-10 group-hover:bg-opacity-0 transition-all duration-500 ease-in-out '></div>


        {/* Image Layer */}
        <div className='absolute w-full h-full rounded-md  overflow-hidden z-0'><Image className='rounded-md z-0 group-hover:scale-110 transition-all duration-500 ease-in-out' layout='fill' objectFit='cover' src={EventsImg2}/></div>
</a>
    </div>
  )
}

export default EventsInfoCard