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

import FacebookLink from '../images/facebook.png'
import GoogleMapLink from '../components/GoogleMapLink'

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
        <GoogleMapLink/>

      </section>

      <Footer/>
      
      
    </div> 
  )
}

export default Home
