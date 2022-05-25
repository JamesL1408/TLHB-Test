import React from 'react'
import Image from 'next/image'
import OpeningTimeImg from '../images/Clock.png'

function OpeningTimesCard() {
  return (
    <div className='w-full h-auto rounded-md flex flex-col text-center items-center shadow-md shadow-gray-400 space-y-5 bg-Jet px-3 py-5 text-white select-none'>
        <Image src={OpeningTimeImg} height={120} width={138}/>
        <h1 className=' font-Roboto font-medium text-lg text-white'>Butchers {'&'} Deli</h1>
        <div className='flex flex-col items-center text-center justify-center space-y-0'>
            <h2 className='font-medium'>Monday</h2>
            <h3>9am - 5pm</h3>
        </div>
        <div className='flex flex-col items-center text-center justify-center space-y-0'>
            <h2 className='font-medium'>Tuesday to Friday</h2>
            <h3>8am - 5.30pm</h3>
        </div>
        <div className='flex flex-col items-center text-center justify-center space-y-0'>
            <h2 className='font-medium'>Saturday</h2>
            <h3>7.30am - 5pm</h3>
        </div>
        <div className='flex flex-col items-center text-center justify-center space-y-0'>
            <h2 className='font-medium'>Sunday</h2>
            <h3>Closed</h3>
        </div>
    </div>
  )
}

export default OpeningTimesCard