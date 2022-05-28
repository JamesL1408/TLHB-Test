import React from 'react'

function ShopOnlineCard() {
  return (
    <div className='w-full h-min rounded-md flex text-center items-center justify-center shadow-md shadow-gray-400 select-none relative bg-Jet'>
        <div className='flex flex-col items-center justify-center px-5 py-5 bg-transparent rounded-md space-y-7 z-20 '>
            <h1 className=' text-xl font-semibold text-LimeGreen brightness-150'>Easy Shopping !</h1>
            <div className='h-[2px] w-[80%] bg-LimeGreen brightness-150'></div>
            <p className='text-white brightness-150'>Tryout our new Online Shopping. Browse our endless range of products and organise for delivery or collection. You're only a few clicks away! </p>
            <a className='py-2 px-4 bg-LimeGreen rounded-md text-xs font-semibold text-gray-900 font-Roboto shadow-sm shadow-gray-500 transition-all duration-300 hover:bg-white hover:brightness-100 hover:text-Jet border border-LimeGreen ease-in-out brightness-150 ' href="/shop">SHOP NOW  {'>'}</a>
        </div>
        
    </div>
  )
}

export default ShopOnlineCard