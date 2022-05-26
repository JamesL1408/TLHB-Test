import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUsCard from '../components/AboutUsCard'
import ContactUsCard from '../components/ContactUsCard'
import OpeningTimesCard from '../components/OpeningTimesCard'
import EventsInfoCard from '../components/EventsInfoCard'
import ShopOnlineCard from '../components/ShopOnlineCard'
import DeliveryInfoCard from '../components/DeliveryInfoCard'
import Map from '../components/Map'

import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'




const Home = () => {


  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>TLHB</title>
        <link rel="icon" href="/3D L.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header/>
      <div className='flex w-full h-[80px] bg-transparent'></div>
      <Hero/>

      <main className='mt-10  grid grid-cols-1 gap-8 730pixels:grid-cols-2 900pixels:grid-cols-3  mx-[10%] '>
        <AboutUsCard/>
        <OpeningTimesCard/>
        <div  className='730pixels:col-span-2 900pixels:col-span-1'>
        <ContactUsCard />
        </div>
      </main>
      <main className='mt-8 grid grid-cols-1 gap-8 730pixels:grid-cols-2 900pixels:grid-cols-3 mx-[10%]'>
        <EventsInfoCard/>
        <ShopOnlineCard/>
        <DeliveryInfoCard/>
      </main>
      
      <div className='w-full h-[100px]'></div>

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


      <section className='w-full bg-gray-800 flex flex-col 900pixels:flex-row 900pixels:justify-around justify-center items-center text-white text-center font-Roboto py-3'>
        <div className='grid  grid-cols-1 gap-3 900pixels:w-[33.3%] '>
          <h2 className='font-medium col-span-full mb-4 text-lg '>Quick Links</h2>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out ' href="">{'>'} Shop Online</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} Delivery Information</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Butchers</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} The Deli</a>
          <a className='hover:underline hover:underline-offset-1 hover:text-Classy transition-all duration-300 ease-in-out' href="">{'>'} About Us </a>
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

      <footer className='w-full h-[100px] bg-Jet'>

      </footer>
      
    </div> 
  )
}

export default Home
