import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'
import HeroImg from '../images/SteakShop.jpeg'
import Chicken from '../images/Chicken.jpg'
import Beef from '../images/Beef.jpg'
import Poultry from '../images/poultry.jpeg'
import Sausage from '../images/Sausage.jpeg'
import Pork from '../images/Pork.jpeg'


import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'
import TypeOfProductCard from '../components/TypeOfProductCard'

function shop() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-200 items-center'>
        <Head>
        <title>The London House Butchery</title>
        <link rel="icon" href="/3D L.ico" />
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
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>Shop</div>
        </section>

        <div className='flex flex-col mt-10  items-center justify-center w-[80%] '>
          <h1 className='text-xl mb-2 font-Roboto font-medium'>Search Products</h1>
          <input className='rounded-sm p-1 w-full max-w-[400px]' type="text" name="" id="" />
        </div>

        <section className='mt-8 mx-[10%] items-center justify-center grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 '>
          <TypeOfProductCard ProductImage={Chicken} ProductName='Chicken' />
          <TypeOfProductCard ProductImage={Beef} ProductName='Beef' />
          <TypeOfProductCard ProductImage={Poultry} ProductName='Poultry' />
          <TypeOfProductCard ProductImage={Sausage} ProductName='Sausage' />
          <TypeOfProductCard ProductImage={Pork} ProductName='Pork' />
          <TypeOfProductCard ProductImage={Chicken} ProductName='Chicken' />
          <TypeOfProductCard ProductImage={Chicken} ProductName='Chicken' />
          <TypeOfProductCard ProductImage={Chicken} ProductName='Chicken' />
        </section>

    </div>
  )
}

export default shop