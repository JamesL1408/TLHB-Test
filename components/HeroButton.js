import React from 'react'

function HeroButton({text}) {
  return (
    <div className='flex items-center justify-center text-center px-6 py-2 bg-transparent border-2 border-white text-white rounded-md font-Roboto whitespace-nowrap '>
        {text}
    </div>
  )
}

export default HeroButton