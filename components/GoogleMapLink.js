import React from 'react'
import Image from 'next/image'
import DirectionLogo from '../images/direct-instagram.png'

function GoogleMapLink() {
  return (
    <div className='absolute top-5 left-5 h-[90px] w-[280px] bg-white shadow-md shadow-gray-700 flex py-2 px-3 justify-between cursor-default'>
          <div className='flex flex-col justify-between '>

          <div className='flex flex-col cursor-auto'>
          <h2 className='text-sm font-medium text-black'>9 St John St</h2>
          <h3 className='text-xs text-gray-700'>9 St John St, Whitland SA34 0AN</h3>
          </div>

          <a href='https://www.google.com/maps/place/The+London+House+Butchery/@51.8189764,-4.6143802,15z/data=!4m2!3m1!1s0x0:0x541984e21f183f54?sa=X&ved=2ahUKEwjr49a89_z3AhXNSsAKHc5UBaAQ_BJ6BAhTEAU' target='_blank' className='text-xs text-blue-600 hover:underline'>View larger map</a>

        </div>
        <div className='flex flex-col items-center group h-min w-min '>
          <div className='h-8 w-8 group-hover:cursor-pointer'><Image src={DirectionLogo} objectFit='contain'/></div>
          <a className='text-xs text-blue-600 group-hover:underline ' href="https://www.google.com/maps/dir//The+London+House+Butchery,+9+St+John+St,+Whitland+SA34+0AN/@51.8189764,-4.6143802,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x486ed0e23695ef5b:0x541984e21f183f54!2m2!1d-4.6142988!2d51.8189959" target='_blank'>Directions</a>

        </div>
        </div>
  )
}

export default GoogleMapLink