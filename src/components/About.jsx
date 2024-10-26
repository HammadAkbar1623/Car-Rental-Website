import React from 'react'
import CarPng from "../../assets/car1.png"
const About = () => {
  return (
    <div className='dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div data-aos = "slide-right" data-aos-duration = "1500">
                <img className='sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' src= {CarPng} alt="" />
            </div>
            <div className='space-y-5 sm:p-16 pb-6'>

            
            <h1 className='text-3xl sm:text-4xl font-bold font-serif' data-aos = "fade-up" data-aos-duration = "1000">About Us</h1>
            <p data-aos = "fade-up" data-aos-duration = "1000">We believe in making your travel experience seamless and enjoyable. Founded with a passion for adventure and exploration, We provide a diverse fleet of well-maintained vehicles to suit all your needs.</p>
            <p data-aos = "fade-up" data-aos-duration = "1500">Our commitment to exceptional customer service ensures that every rental process is smooth, from booking to returning vehicle. With competitive pricing, flexible rental options, and 24/7 support, we strive to exceed your expectations and get you on the road with confidence.</p>
            <button className='button-outline' data-aos = "fade-up" data-aos-duration = "1500">
                Get Started
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
