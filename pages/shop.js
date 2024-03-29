import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import FacebookLink from '../images/facebook.png'
import HeroImg from '../images/SteakShop.jpeg'
import HeroImg2 from '../images/deli3.jpg'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'
import FoodSectionCard from '../components/FoodSectionCard'

import Beef from '../images/Beef.jpg'
import Poultry from '../images/poultry.jpeg'
import Pork from '../images/Pork.jpeg'
import Lamb from '../images/Lamb2.jpg'
import Sausage from '../images/Sausage.jpeg'
import Gammon from '../images/HamHero.jpg'
import GoogleMapLink from '../components/GoogleMapLink'

function shop() {

  return (
    <div className='flex flex-col min-h-screen bg-gray-200 items-center'>
        <Head>
        <title>Shop - The London House Butchery</title>
        <link rel="icon" href="/L-logo3.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header/>

      <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex flex-col justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out text-white'> 
                    <h1 className='text-2xl  font-Roboto'>LOOKING TO</h1>
                    <h1 className='text-6xl font-Satisfy'>Shop?</h1>
                    <h3 className='text-2xl font-Roboto '>HAVE A LOOK</h3>
                </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg2} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>Shop</div>
        </section>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-x-20 mt-10'>
          <FoodSectionCard SectionTitle={'Poultry'} SectionImg={Poultry} SectionLink={'/poultry'}/>
          <FoodSectionCard SectionTitle={'Pork'} SectionImg={Pork} SectionLink={'/pork'}/>
          <FoodSectionCard SectionTitle={'Beef'} SectionImg={Beef} SectionLink={'/beef'}/>
          <FoodSectionCard SectionTitle={'Lamb'} SectionImg={Lamb} SectionLink={'/lamb'}/>
          <FoodSectionCard SectionTitle={'Gammon'} SectionImg={Gammon} SectionLink={'/gammon'}/>
          <FoodSectionCard SectionTitle={'Sausage'} SectionImg={Sausage} SectionLink={'/sausage'}/>
        </div>

        <div className='w-full h-[100px]'></div>
        <section className='h-[400px] w-full bg-transparent text-transparent cursor-grab active:cursor-grabbing relative '>
        <Map/>
        <GoogleMapLink/>
      </section>
      <Footer/>

    </div>
  )
}

export default shop