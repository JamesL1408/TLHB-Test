import React from 'react'
import Image from 'next/image'

function TypeOfProductCard({ ProductImage, ProductName }) {
  return (
    <div className='w-full bg-gray-300 h-auto'>
        <a className='flex flex-col items-center justify-center h-full w-full' href="">
        <div className='h-[85%] w-full '>
            <Image src={ProductImage} layout='fill' objectFit='cover'/>
        </div>
        <h1 className="text-Jet group-hover:text-Classy transition-all duration-300 ease-in-out">{ProductName}</h1>
        </a>        
    </div>
  )
}

export default TypeOfProductCard