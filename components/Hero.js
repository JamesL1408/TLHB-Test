import React from 'react'
import Image from 'next/image'
import Deli from '../images/deli1.jpeg'
import BuyOnline from '../images/buyonline1.jpeg'
import HeroButton from './HeroButton'
import BuyOnline2 from '../images/HamHero.jpg'
import Deli2 from '../images/Deli2.jpg'
import Deli3 from '../images/deli4.jpg'


function Hero() {
  return (
    <div>

      {/*Monitor Screen 720 pix + */}
    <div className='w-full h-[565px] hidden 730pixels:flex relative bg-red-400 overflow-hidden '>

        <div className='relative w-1/2 group'><a href="/shop">
            <div className='absolute top-1/4 left-1/2 z-20 -translate-x-1/2 text-5xl text-white font-Satisfy group-hover:opacity-40 transition-all duration-500 ease-in-out whitespace-nowrap '>Shop Online</div>
            <div className='absolute bottom-1/4 left-1/2 z-20 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out'> <HeroButton text={"SHOP ONLINE >"}/></div>
            <div className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-0 z-10 transition-all duration-500 ease-in-out'></div>
            <Image priority src={BuyOnline2} layout='fill' objectFit='cover' className='group-hover:scale-110 transition-all duration-500 ease-in-out'/></a>
        </div>

        <div className='relative w-1/2 group'><a href="">
            <div className='absolute top-1/4 left-1/2 z-20 -translate-x-1/2 text-5xl text-white font-Satisfy group-hover:opacity-40 transition-all duration-500 ease-in-out'>The Deli</div>
            <div className='absolute bottom-1/4 left-1/2 z-20 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out'> <HeroButton text={"FIND OUT MORE >"}/> </div>
            <div className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-0 z-10 transition-all duration-500 ease-in-out'></div>
            <Image priority src={Deli3} layout='fill' objectFit='cover' className='group-hover:scale-110 transition-all duration-500 ease-in-out' /></a>
            </div>
    </div>


    

      {/*Mobile Screen (0 - 720pixels)     */}


    <div className='w-full h-[565px] flex flex-col space-y-4 730pixels:hidden relative overflow-hidden items-center group '>
        <a href="/shop">
          <div className='absolute top-1/4 left-1/2 z-20 -translate-x-1/2 text-5xl text-white font-Satisfy group-hover:opacity-40 transition-all duration-500 ease-in-out whitespace-nowrap'>Shop Online</div>
          <div className='absolute bottom-1/4 left-1/2 z-20 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out'> <HeroButton text={"SHOP ONLINE >"}/></div>
          <div className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-0 z-10 transition-all duration-500 ease-in-out'></div>
        <Image priority src={BuyOnline2} layout='fill' objectFit='cover' className='group-hover:scale-110 transition-all duration-500 ease-in-out'/>
        </a>
    </div>

    <div className='w-full h-[565px] flex flex-col space-y-4 730pixels:hidden relative overflow-hidden items-center group '>
        <a href="">
          <div className='absolute top-1/4 left-1/2 z-20 -translate-x-1/2 text-5xl text-white font-Satisfy group-hover:opacity-40 transition-all duration-500 ease-in-out whitespace-nowrap'>The Deli</div>
          <div className='absolute bottom-1/4 left-1/2 z-20 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out'> <HeroButton text={"FIND OUT MORE >"}/></div>
          <div className='absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-0 z-10 transition-all duration-500 ease-in-out'></div>
        <Image priority src={Deli3} layout='fill' objectFit='cover' className='group-hover:scale-110 transition-all duration-500 ease-in-out'/>
        </a>
    </div>

    </div>
  )
}

export default Hero