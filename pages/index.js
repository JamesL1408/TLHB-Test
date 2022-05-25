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


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>TLHB</title>
        <link rel="icon" href="/3D L.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
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
      
      <div className='w-full h-[400px]'></div>
      
    </div>
  )
}

export default Home
