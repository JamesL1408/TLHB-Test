import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>TLHB</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>





      
    </div>
  )
}

export default Home
