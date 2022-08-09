import React from 'react'
import Image from 'next/image'

function TypeOfProductCard({ ProductImage, ProductName }) {
  return (
    <div className='flex'>
        <a className='flex flex-col items-center justify-center h-full w-full max-w-[190px] max-h-[220px] bg-Jet rounded-sm group' href="">
          <div className='h-[85%] w-full overflow-hidden '>
              <Image className='rounded-sm group-hover:scale-110 transition-all duration-500 ease-in-out' src={ProductImage} objectFit='cover' />
          </div>
          <div className='flex-grow  h-[15%] w-full flex items-center justify-center text-center'>
            <h1 className=" transition-all duration-300 ease-in-out text-white group-hover:text-Classy font-medium  font-Roboto">{ProductName}</h1>
          </div>
        </a>        
    </div>
  )
}

export default TypeOfProductCard