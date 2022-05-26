import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'

const contact = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>Contact Us - The London House Butchery</title>
            <link rel="icon" href="/3D L.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>
        </div>
)
}

export default contact