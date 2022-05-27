import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'

import HeroImg from '../images/ContactImgHero.jpg' 

const contact = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>Contact Us - The London House Butchery</title>
            <link rel="icon" href="/3D L.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>

            <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex flex-col justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out text-white'> 
                    <h1 className='text-2xl  font-Roboto'>HAVE A</h1>
                    <h1 className='text-6xl font-Satisfy'>Question?</h1>
                    <h3 className='text-2xl font-Roboto '>GET IN TOUCH</h3>
                </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>Contact Us</div>
            </section>

            <section className='grid grid-cols-1 sm:grid-cols-2 mx-[10%] xl:mx-[15%] xl:gap-x-12 gap-7 items-center justify-center mt-10 '>
                <div className='w-full min-h-[206px] rounded-sm bg-white space-y-3 flex flex-col px-7 py-4 items-center justify-start text-center shadow-md shadow-gray-600 '>
                    <h1 className='text-lg font-Roboto font-medium whitespace-nowrap'>General Query?</h1>
                    <div className='h-[2px] bg-Classy w-[80%]'></div>
                    <p className=' text-gray-800 font-Roboto'>You can find all the details you need to contact us here. Fill in our contact form, send an email, give us a call or even message via our social media channels. We will get back to you as soon as we can!</p>
                </div>
                <div className='w-full  h-full rounded-sm bg-white space-y-3 flex flex-col px-7 py-4 items-center justify-start text-center shadow-md shadow-gray-600 '>
                    <h1 className='text-lg font-Roboto font-medium whitespace-nowrap'>Looking to order?</h1>
                    <div className='h-[2px] bg-Classy w-[80%]'></div>
                    <p className=' text-gray-800 font-Roboto'>You can now place orders for delivery or collection online!</p>
                    <a className='text-xs font-semibold font-Roboto px-5 py-2 bg-Classy rounded-md text-Jet shadow-sm shadow-gray-500 hover:bg-Jet hover:text-white transition-all duration-300 ease-in-out' href="">ORDER NOW  {'>'}</a>
                </div>

                <div></div>
                <div></div>

            </section>
        </div>
)
}

export default contact