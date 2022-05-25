import React from 'react'
import Image from 'next/image'
import ContactUsImg from '../images/ContactUsImg.png'

function ContactUsCard() {
  return (
    <div className='w-full h-min rounded-md flex flex-col text-center items-center shadow-md shadow-gray-400 space-y-5 bg-white px-3 py-5 select-none'>
        <h1 className=' text-xl font-semibold'>Feel Free To Contact Us Anytime</h1>
        <div className='h-[1px] w-[80%] bg-Jet'></div>
        <p>You can find all the details you need to contact us here. Fill in our contact form, send an email, call us or even message via our social media channels. We will get back to you as soon as we can!</p>
        <a className='py-2 px-4 bg-Classy rounded-md text-xs font-semibold text-Jet font-Roboto shadow-sm shadow-gray-500 transition-all duration-300 hover:bg-Jet hover:text-white ease-in-out' href="">CONTACT PAGE  {'>'} </a>
        <div><Image src={ContactUsImg} height={100} width={180}/></div>
    </div>
  )
}

export default ContactUsCard