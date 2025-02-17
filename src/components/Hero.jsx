import React from 'react'
import carPng from "../../assets/car.png"
import yellowCarPng from "../../assets/banner-car.png"
const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative -z-20'>
      <div className="container min-h-[620px] flex">
        <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div className='order-1 sm:order-2' data-aos = "zoom-in" data-aos-duration = "1500">
                <img src={theme === "dark" ? carPng : yellowCarPng} alt=""  className='relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgb(0,0,0,0.50)]'/>
            </div>
            <div className='order-2 sm:order-1 space-y-5 sm:pr-32'>
                <p className='text-primary text-2xl font-serif' data-aos = "fade-up">Effortless</p>
                <h1 className='text-5xl lg:text-7xl font-semibold font-serif' data-aos = "fade-up" data-aos-delay = "600">Car Rental</h1>
                <p data-aos = "fade-up" data-aos-delay = "1000">The Best spot to Rent a Car for better Journey</p>
                <button className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300' data-aos = "fade-up" data-aos-delay = "1500">Get Started</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
