import Image from 'next/image'
import Head from 'next/head'


import Logo from '../images/LogoWhite1.png'
import Steak from '../images/Steak2.jpg'
import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'


const about = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>TLHB</title>
            <link rel="icon" href="/3D L.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>

            {/*Hero Section*/}

            <section className='w-full h-[500px] hidden items-center justify-center 730pixels:flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out'><Image src={Logo} objectFit='contain'/>  </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={Steak} objectFit='contain'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>About Us</div>
            </section>
            
            {/*About Us Section*/}

            <section className='w-full flex flex-col items-center text-center justify-center my-10 text-lg font-medium text-gray-600 space-y-6 select-none'>
                <p className='w-[80%]'>Millins Of Tiptree employ highly trained, knowledgeable butchers who have years of experience for you to tap into. We go to great lengths to source our meat from local, loyal suppliers we know and trust.</p>
                <p className='w-[80%]'>We strive to offer you incredible value in the quality of our products as well as our expert and professional service.</p>
                <p className='w-[80%]'>Traditional {'&'} Artisan Butchers {'&'} Food Hall<br/>Suppliers of Beef, Lamb, Pork, Poultry {'&'} Game Delicatessen, Charcuterie, Wines, Spirits and lots of Gin!<br/>Specialists in Local Produce...</p>
            </section>

            {/*Maps Section*/}


            <section className='h-[400px] w-full bg-transparent text-transparent cursor-grab active:cursor-grabbing relative '>
            <Map/>

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

      </section>

      <section className='w-full bg-gray-700 flex flex-col 900pixels:flex-row 900pixels:justify-around justify-center items-center text-white text-center font-Roboto py-3'>
        <div className='grid  grid-cols-1 gap-3 900pixels:w-[33.3%] '>
          <h2 className='font-medium col-span-full mb-4 text-lg '>Quick Links</h2>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out ' href="">{'>'} Shop Online</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} Delivery Information</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Butchers</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Deli</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="/about">{'>'} About Us </a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} Contact Us</a>
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

export default about