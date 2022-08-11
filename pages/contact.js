import Image from 'next/image'
import Head from 'next/head'
import emailjs from 'emailjs-com'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Map from '../components/Map'
import Footer from '../components/Footer'

import HeroImg from '../images/ContactImgHero.jpg' 
import FacebookLink from '../images/facebook.png'
import DirectionLogo from '../images/direct-instagram.png'

const contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_xvv2n4a","template_66wowcl",e.target,"user_EQHsAk1zzVWnSq2Z1nM5F").then(res=>{
            console.log(res);
            alert("Message Sent! We will get back to you as soon as possible.")
        }).catch(err=>{ 
            console.log(err);
            alert("Error sending message. Please try again.")
        });
    }

    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
            <Head>
            <title>Contact Us - The London House Butchery</title>
            <link rel="icon" href="/L-logo3.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400;500;700;900&family=Satisfy&display=swap" rel="stylesheet"></link>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.8.2/mapbox-gl.css' rel='stylesheet' />
            </Head>
            <Header/>

            <section className='w-full h-[350px] sm:h-[450px] 730pixels:h-[500px] items-center justify-center flex relative bg-Jet overflow-hidden group  '>
                <div className='w-full h-full absolute left-0 bottom-0 flex flex-col justify-center items-center z-20 group-hover:opacity-40 transition-all duration-500 ease-in-out text-white'> 
                    <h1 className='text-2xl  font-Roboto'>HAVE A</h1>
                    <h1 className='text-6xl font-Satisfy'>Question?</h1>
                    <h3 className='text-2xl font-Roboto '>GET IN TOUCH</h3>
                </div>              
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center z-0'><Image src={HeroImg} objectFit='cover' layout='fill'/></div>     
                <div className='w-full h-full absolute left-0 bottom-0 flex justify-center items-center bg-Jet opacity-95 z-10 group-hover:opacity-40 transition-all duration-500 ease-in-out'></div>  
                <div className=' font-Satisfy absolute z-30 text-Classy text-4xl bottom-4 left-1/2 -translate-x-1/2 group-hover:opacity-40 transition-all duration-500 ease-in-out '>Contact Us</div>
            </section>

            <section className='grid grid-cols-1 770pixels:grid-cols-2 mx-[10%] xl:mx-[15%] xl:gap-x-12 gap-7 items-center justify-center mt-10 '>
                <div className='w-full min-h-[206px] rounded-sm bg-white space-y-3 flex flex-col px-7 py-4 items-center justify-start text-center shadow-md shadow-gray-600 '>
                    <h1 className='text-xl font-Roboto font-medium whitespace-nowrap'>General Query?</h1>
                    <div className='h-[2px] bg-Classy w-[80%]'></div>
                    <p className=' text-gray-800 font-Roboto'>You can find all the details you need to contact us here. Fill in our contact form, send an email, give us a call or even message via our social media channels. We will get back to you as soon as we can!</p>
                </div>
                <div className='w-full  h-full rounded-sm bg-white space-y-3 flex flex-col px-7 py-4 items-center justify-start text-center shadow-md shadow-gray-600 '>
                    <h1 className='text-xl font-Roboto font-medium whitespace-nowrap'>Looking to order?</h1>
                    <div className='h-[2px] bg-Classy w-[80%]'></div>
                    <p className=' text-gray-800 font-Roboto'>You can now place orders for delivery or collection online!</p>
                    <a className='text-xs font-semibold font-Roboto px-5 py-2 bg-Classy rounded-md text-Jet shadow-sm shadow-gray-500 hover:bg-Jet hover:text-white transition-all duration-300 ease-in-out' href="">ORDER NOW  {'>'}</a>
                </div>

                <div className='w-full rounded-sm bg-Jet text-white flex flex-col px-7 py-4 items-center justify-start shadow-sm shadow-gray-600 space-y-6 border border-black'>
                    <div className='flex flex-col space-y-2 w-full items-center'>
                        <h1 className='text-xl font-medium font-Roboto'>Contact Form</h1>
                        <div className='bg-Classy h-[2px] w-[80%]'></div>
                    </div>
                    <form onSubmit={sendEmail} className='flex flex-col space-y-4 items-start justify-center w-full text-black'>
                        <div className='flex flex-col space-y-1  w-full'>
                            <label className='text-sm text-white font-medium' htmlFor="">Name</label>
                            <input className='rounded-sm bg-gray-200 w-[90%] px-1' type="text" name='name' id='name' />
                        </div>
                        <div className='flex flex-col space-y-1  w-full'>
                            <label className='text-sm text-white font-medium' htmlFor="">Phone Number</label>
                            <input className='rounded-sm bg-gray-200 w-[90%] px-1' type="text" name='number' id='number'/>
                        </div>
                        <div className='flex flex-col space-y-1  w-full'>
                            <label className='text-sm text-white font-medium' htmlFor="">Email Address</label>
                            <input className='rounded-sm bg-gray-200 w-[90%] px-1' type="email" name='email' id='email'/>
                        </div>
                        <div className='flex flex-col space-y-1  w-full'>
                            <label className='text-sm text-white font-medium' htmlFor="">Message</label>
                            <textarea className='bg-gray-200 p-1' name="message" id="message"  rows="10"></textarea> 
                        </div>
                        <div className='w-full flex items-center justify-center'>
                        <input className='px-14 py-2 bg-Classy text-Jet rounded-sm font-semibold shadow-md shadow-gray-700 cursor-pointer hover:bg-gray-200 hover:text-Jet transition-all duration-300 ease-in-out' type="submit" value="Send" />
                        </div>
                    </form>
                </div>

                <div className='w-full h-full rounded-sm bg-Jet flex flex-col px-7 py-4 items-center justify-start shadow-sm shadow-gray-600 space-y-6 border border-black text-white'>
                    <h1 className='text-xl font-semibold'>Our Contact Details</h1>
                    <div className='bg-Classy h-[2px] w-[80%]'></div>
                    <div className='flex flex-col w-full justify-start'>
                        <h1 className='font-medium'>General Enquiries : </h1>
                        <a href="">info@londonhousebutchery.co.uk</a>
                    </div>
                    <div className='flex flex-col w-full justify-start'>
                        <h1 className='text-lg font-semibold'>The London House Butchery</h1>
                        <a className='py-1 px-2 bg-red-600 rounded-md border border-white hover:bg-green-600 transition-all duration-300 ease-in-out mb-5 w-[200px]' href="tel:+4401994240055">📱 01994 240055</a>
                    </div>
                    <div className='flex flex-col w-full justify-start'>
                        <h1 className='font-medium'>Opening Hours: </h1>
                        <h3>Monday 9am - 5pm</h3>
                        <h3>Tuesday to Friday 8am - 5.30pm</h3>
                        <h3>Saturday 7.30am - 5pm</h3>
                        <h3>Sunday - Closed</h3>
                    </div>
                    <div className='flex flex-col w-full justify-start'>
                        <h1 className='font-medium'>Contact us on Facebook:</h1>
                        <a href='https://www.facebook.com/theLondonHousebutchery/' target='_blank' className='h-[42px] w-[100px] hover:brightness-125'><Image src={FacebookLink} objectFit='contain'/></a>
                    </div>
                </div>
            </section>
            <section className='h-[400px] w-full bg-transparent text-transparent cursor-grab active:cursor-grabbing relative mt-10 '>
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

export default contact