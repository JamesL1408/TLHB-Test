import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Map from '../components/Map'
import Footer from '../components/Footer'
import TypeOfProductCard from '../components/TypeOfProductCard'
import { useState } from 'react'
import {data} from '../public/dataPoultry'
import FoodSectionCard from '../components/FoodSectionCard'

import HeroImg2 from '../images/CookedGameBirdsinCasserolePan.jpg'
import GoogleMapLink from '../components/GoogleMapLink'


function poultry() {

    const [searchTerm,setSearchTerm] = useState("");

  return (
    <div className='flex flex-col min-h-screen bg-gray-200 items-center'>
        <Head>
        <title>Poultry - The London House Butchery</title>
        <link rel="icon" href="/L-logo3.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header/>

      <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex flex-col justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out text-white'> 
                    <h1 className='text-2xl  font-Roboto'>LOOKING FOR</h1>
                    <h1 className='text-6xl font-Satisfy'>Poultry?</h1>
                    <h3 className='text-2xl font-Roboto '>TAKE A LOOK</h3>
                </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg2} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>Poultry</div>
        </section>

        <div className='flex flex-col mt-10 items-center justify-center w-[80%] '>
          <h1 className='text-xl mb-2 font-Roboto font-medium'>Search Products</h1>
          <div className='relative w-full max-w-[400px] flex items-center justify-center '>
            <input 
            onChange={(event)=>{
              setSearchTerm(event.target.value);
            }} 
            className='rounded-md p-1 w-full max-w-[400px] focus:outline-Classy' 
            
            type="text"
            name="" 
            id="" 
            />
            <div className='h-full w-[40px] bg-Jet absolute top-0 right-0 rounded-r-md flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-Classy" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
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
                  <TypeOfProductCard ProductImage={val.image} ProductName={val.title}/>
                </div>
              )
            })
          }
        </section>

        <div className='w-full h-[100px]'></div>
        <section className='h-[400px] w-full bg-transparent text-transparent cursor-grab active:cursor-grabbing relative '>
        <Map/>
        <GoogleMapLink/>

      </section>
      <Footer/>
    </div>
  )
}

export default poultry