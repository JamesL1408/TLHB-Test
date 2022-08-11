import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'
import HeroImg from '../images/SteakShop.jpeg'
import HeroImg2 from '../images/deli3.jpg'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'
import TypeOfProductCard from '../components/TypeOfProductCard'

import { useState } from 'react'
import {data} from '../public/data'

function shop() {

  const [searchTerm,setSearchTerm] = useState("");

  return (
    <div className='flex flex-col min-h-screen bg-gray-200 items-center'>
        <Head>
        <title>Shop - The London House Butchery</title>
        <link rel="icon" href="/L-logo.ico" />
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

        <div className='flex flex-col mt-10  items-center justify-center w-[80%] '>
          <h1 className='text-xl mb-2 font-Roboto font-medium'>Search Products</h1>
          <input 
          onChange={(event)=>{
            setSearchTerm(event.target.value);
          }} 
          className='rounded-sm p-1 w-full max-w-[400px]' 
          type="text"
           name="" 
           id="" 
           />
        </div>

        <section className='mt-8 mx-[10%] items-center justify-center grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 '>
          {
            data.filter((val) => {
              if(searchTerm == ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val)=>{
              return(
                <div key={val.id}>
                  <TypeOfProductCard ProductImage={val.image} ProductName={val.title} />
                </div>
              )
            })
          }
        </section>

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

export default shop