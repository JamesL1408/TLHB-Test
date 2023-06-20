import Image from 'next/image'
import Head from 'next/head'

import Logo from '../images/LogoWhite1.png'
import Steak from '../images/Steak2.jpg'
import HeroImg from '../images/CookedGameBirdsinCasserolePan.jpg'
import FacebookLink from '../images/facebook.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'
import Footer from '../components/Footer'

import {ShoppingCartIcon} from '@heroicons/react/outline'
import GoogleMapLink from '../components/GoogleMapLink'


const about = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>About Us - The London House Butchery</title>
            <link rel="icon" href="/L-logo3.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>

            {/*Hero Section*/}

            <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out'><Image src={Logo} objectFit='contain'/>  </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>About Us</div>
            </section>
            <div className='fixed 730pixels:hidden h-10 w-10 top-[81px] right-4 rounded-full bg-LimeGreen brightness-150 flex items-center justify-center p-2 hover:bg-Classy hover:brightness-100 z-30' ><a className='w-full h-full' href="/shop"><ShoppingCartIcon className=''/></a></div>
            
            {/*About Us Section*/}

            <section className='w-full flex flex-col items-center text-center justify-center my-16 text-lg font-medium text-gray-600 space-y-6 select-none max-w-[1000px] mx-auto'>
                <p className='w-[80%]'>The London House Butchery employ highly trained, knowledgeable butchers who have years of experience for you to tap into. We go to great lengths to source our meat from local, loyal suppliers we know and trust.</p>
                <p className='w-[80%]'>We strive to offer you incredible value in the quality of our products as well as our expert and professional service.</p>
                <p className='w-[80%]'>Traditional {'&'} Artisan Butchers {'&'} Food Hall<br/>Suppliers of Beef, Lamb, Pork, Poultry {'&'} Game Delicatessen, Charcuterie, Wines, Spirits and lots of Gin!<br/>Specialists in Local Produce...</p>
            </section>

            {/*Maps Section*/}


            <section className='h-[400px] w-full bg-transparent text-transparent cursor-grab active:cursor-grabbing relative '>
            <Map/>
            <GoogleMapLink/>

      </section>

      <Footer/>


    
            
        </div>
    )
}

export default about