import Image from 'next/image'
import Head from 'next/head'


import Logo from '../images/LogoWhite1.png'
import Steak from '../images/Steak2.jpg'
import DirectionLogo from '../images/direct-instagram.png'
import FacebookLink from '../images/facebook.png'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'
import Footer from '../components/Footer'

const about = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>About Us - The London House Butchery</title>
            <link rel="icon" href="/3D L.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>

            {/*Hero Section*/}

            <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out'><Image src={Logo} objectFit='contain'/>  </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={Steak} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>About Us</div>
            </section>
            
            {/*About Us Section*/}

            <section className='w-full flex flex-col items-center text-center justify-center my-16 text-lg font-medium text-gray-600 space-y-6 select-none max-w-[1000px] mx-auto'>
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

      <Footer/>


    
            
        </div>
    )
}

export default about