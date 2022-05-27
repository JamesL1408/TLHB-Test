import React from 'react'
import Image from 'next/image'
import LogoWhite from '../images/LogoWhite1.png'
import FacebookLink from '../images/facebook.png'
import {ShoppingCartIcon,MenuIcon} from '@heroicons/react/outline'

function Header() {

  if (typeof window === 'object'){
      const openmenubtn = document.querySelector(".menu-open-btn");
      const menuscreen = document.querySelector(".small-menu");

      openmenubtn.addEventListener("click", ()=>{
        menuscreen.classList.toggle("-translate-y-full");
      });
      
   }

  return (
    <div>
      {/* Monitor Screen 730pix + */}
    <div className='hidden 730pixels:flex w-full items-center justify-around bg-Jet h-[80px] fixed top-0 left-0 z-50 '>
        <a href='/' className='relative w-[180px] flex items-center justify-center '><Image src={LogoWhite} /></a>
        <div className='flex space-x-6 text-white select-none'>

            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out' href="/about">About</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out' href="">Discover</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out' href="">Find Us</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out' href="/contact">Contact Us</a><span className='h-[2px] w-0  bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
 
        </div>
        <div className='flex items-center justify-center space-x-2'>
            <button className='relative group px-6 py-2 bg-Classy rounded-md flex items-center justify-center text-center overflow-hidden hover:scale-105 '>
                <div className='z-10 text-Jet bg-transparent font-semibold'>Order Online</div>
                <div className='absolute top-0 left-0 rounded-sm translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out h-full w-full bg-Classy brightness-125'></div>
            </button>
            <ShoppingCartIcon className='h-6 w-6 hover:brightness-125 hover:scale-105 text-Classy cursor-pointer rounded-full'/>
        </div>
    </div>


      {/* Mobile Screen 0-730pix */}

    <div className='flex 730pixels:hidden w-full items-center justify-between px-5 bg-Jet h-[80px] fixed top-0 left-0 z-50 '>

        <a href='/' className='relative w-[180px] flex items-center justify-center '><Image src={LogoWhite} /></a>
        
         {/* Menu Button Open*/}
        <div className='menu-open-btn flex items-center justify-center space-x-2'>
            <MenuIcon className='h-9 w-9 hover:brightness-125  text-Classy cursor-pointer rounded-full'/>
        </div>

        <div className='fixed h-10 w-10 top-[81px] right-4 rounded-full bg-LimeGreen brightness-150 flex items-center justify-center p-2 hover:bg-Classy hover:brightness-100' ><a className='w-full h-full' href=""><ShoppingCartIcon className=''/></a></div>

    </div>
          {/* Mobile Screen 0-730pix MENU SECTION*/}
      <div className='small-menu fixed 730pixels:hidden w-full h-[40%] z-40 top-[80px] left-0 bg-Jet flex items-center justify-center  transition-all duration-200 ease-in-out border-t border-Classy -translate-y-full'>
        <div className='relative flex flex-col space-y-3 text-white select-none items-center justify-center text-center h-full w-full mb-14 '>

            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out text-lg' href="/about">About</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out text-lg' href="">Discover</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out text-lg' href="">Find Us</a><span className='h-[2px] w-0 bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            <div className='flex flex-col items-center justify-center group'><a className='group-hover:text-Classy transition-all duration-300 ease-in-out text-lg' href="/contact">Contact Us</a><span className='h-[2px] w-0  bg-Classy group-hover:w-full transition-all duration-300 ease-in-out'></span></div>
            
        </div>
        <div className='absolute left-1/2 bottom-2 -translate-x-1/2 text-sm flex flex-col items-center text-center justify-center whitespace-nowrap text-white'>
              <h1>© The London House Butchery</h1>
              <a target='_blank' href="https://www.facebook.com/theLondonHousebutchery/"><Image src={FacebookLink} height={42} width={100}/></a>
            </div>
      </div>


    </div>
  )
}

export default Header