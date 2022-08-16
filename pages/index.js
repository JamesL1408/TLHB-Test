import Head from 'next/head'
import Image from 'next/image'
import { commerce } from '../src/lib/commerce';

import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUsCard from '../components/AboutUsCard'
import ContactUsCard from '../components/ContactUsCard'
import OpeningTimesCard from '../components/OpeningTimesCard'
import EventsInfoCard from '../components/EventsInfoCard'
import ShopOnlineCard from '../components/ShopOnlineCard'
import DeliveryInfoCard from '../components/DeliveryInfoCard'
import Map from '../components/Map'
import Footer from '../components/Footer'

import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'

import {ShoppingCartIcon} from '@heroicons/react/outline'





const Home = () => {


  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>The London House Butchery</title>
        <link rel="icon" href="/L-logo3.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header/>
      <div className='flex w-full h-[80px] bg-transparent'></div>
      <Hero/>
      <div className='fixed 730pixels:hidden h-10 w-10 top-[81px] right-4 rounded-full bg-LimeGreen brightness-150 flex items-center justify-center p-2 hover:bg-Classy hover:brightness-100 z-30' ><a className='w-full h-full' href="/shop"><ShoppingCartIcon className=''/></a></div>

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

      <Footer/>
      
      
    </div> 
  )
}

export default Home
