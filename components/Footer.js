import React from 'react'
import Image from 'next/image'

import FacebookLink from '../images/facebook.png'

function Footer() {
  return (
    <div>
        <section className='w-full bg-gray-700 flex flex-col 900pixels:flex-row 900pixels:justify-around justify-center items-center text-white text-center font-Roboto py-3'>
        <div className='grid  grid-cols-1 gap-3 900pixels:w-[33.3%] '>
          <h2 className='font-medium col-span-full mb-4 text-lg '>Quick Links</h2>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out ' href="">{'>'} Shop Online</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} Delivery Information</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Butchers</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Deli</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="/about">{'>'} About Us </a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="/contact">{'>'} Contact Us</a>
        </div>
        <div className='flex flex-col 900pixels:w-[33.3%] items-center'>
          <h1 className='text-lg font-medium my-5'>The London House Butchery</h1>
          <a className='py-1 px-2 bg-red-600 rounded-md border border-white hover:bg-green-600 transition-all duration-300 ease-in-out mb-5 w-[200px]' href="tel:+4401994240055">📱 01994 240055</a>
          <div className='flex flex-col'>
            <h2 className='font-medium text-lg mb-2'>Opening Times : </h2>
            <h3>Monday 9am - 5pm</h3>
            <h3>Tuesday to Friday 8am - 5.30pm</h3>
            <h3>Saturday 7.30am - 5pm</h3>
            <h3>Sunday - Closed</h3>
          </div>
        </div>
        <div className='flex flex-col items-center mt-5 900pixels:w-[33.3%]'>
          <h1>Email 📧 : info@londonhousebutchery.co.uk</h1>
          <h2 className='-mb-1 mt-1'>Follow Us on Facebook</h2>
          <a href='https://www.facebook.com/theLondonHousebutchery/' target='_blank' className='h-[42px] w-[100px] hover:brightness-125'><Image src={FacebookLink} objectFit='contain'/></a>
        </div>

      </section>

      <footer className='w-full h-[100px] bg-Jet flex items-center justify-center flex-col text-xs text-white'>
        <p>© 2022</p>
        <p>The London House Butchery</p>
        <p>9 St John St, Whitland SA34 0AN</p>

      </footer>
    </div>
  )
}

export default Footer