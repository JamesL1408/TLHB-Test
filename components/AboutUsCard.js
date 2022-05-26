import React from 'react'
import Image from 'next/image'
import AboutUsImg from '../images/AboutUsImg.png'

function AboutUsCard() {
  return (
    <div className='w-full h-min rounded-md flex flex-col text-center items-center shadow-md shadow-gray-400 space-y-5 bg-white px-3 py-5 select-none'>
        <h1 className=' text-xl font-semibold'>The London House Butchery</h1>
        <div className='h-[1px] w-[80%] bg-Jet'></div>
        <p>Traditional {'&'} Artisan Butchers {'&'} Food Hall Suppliers of Beef, Lamb, Pork, Poultry {'&'} GameDelicatessen, Charcuterie, Wines, Spirits and lots of Gin! Specialists in Local Produce...</p>
        <a className='py-2 px-4 bg-Classy rounded-md text-xs font-semibold text-Jet font-Roboto shadow-sm shadow-gray-500 transition-all duration-300 hover:bg-Jet hover:text-white ease-in-out' href="/about">READ MORE ABOUT US  {'>'} </a>
        <div><Image className='mt-10' src={AboutUsImg} height={100} width={150}/></div>
    </div>
  )
}

export default AboutUsCard