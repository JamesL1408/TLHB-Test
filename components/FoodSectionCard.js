import React from 'react'
import Image from 'next/image'

function FoodSectionCard({SectionImg, SectionTitle, SectionLink}) {
  return (
    <a href={SectionLink} className='group relative h-[260px] w-[260px] rounded-md shadow-md shadow-gray-500 cursor-pointer 500pixels:h-[200px] 500pixels:w-[360px] 640pixels:h-[260px] 640pixels:w-[260px] 870pixels:w-[400px] 870pixels:h-[200px] 1200pixels:w-[460px] 1200pixels:h-[200px]'>
        <div className='w-full h-full absolute top-0 left-0 rounded-md overflow-hidden'><Image src={SectionImg} layout='fill' objectFit='cover' className='rounded-md group-hover:scale-110 transition-all duration-500 ease-in-out'/></div>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 group-hover:bg-opacity-0 rounded-md transition-all duration-500 ease-in-out '></div>
        <h1 className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-5xl text-white font-Satisfy group-hover:opacity-40 transition-all duration-500 ease-in-out'>{SectionTitle}</h1>
    </a>
  )
}

export default FoodSectionCard