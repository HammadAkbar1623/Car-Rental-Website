import React from 'react'

const testi = [
    {
        name: "Harry",
        image: "",
        description: "Great services and customer support. Highly Recommended",
        aosDelay: "0"
    },
    {
        name: "John",
        image: "",
        description: "Great services and customer support. Highly Recommended",
        aosDelay: "300"
    },
    {
        name: "James",
        image: "",
        description: "Great services and customer support. Highly Recommended",
        aosDelay: "1000"
    },
]

const Testimonials = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24 '>
      <div className="container">
        <div className='space-y-4 pb-12'>
        <p data-aos = "fade-up" className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What our Clients say about Us</p>
        <p data-aos = "fade-up" className='text-center sm:px-44'>Our Happy & Satisfied Clients</p>
        </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white'>
              { testi.map((data) =>  {
                    return(
                        <div data-aos = "fade-up" data-aos-delay = {data.aosDelay} className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg' key={data.name}>
                            <div className='grid place-items-center'>
                                <img className='h-20 w-20 rounded-full' src="https://picsum.photos/200" alt="" />
                            </div>
                            <div>
                               <p> {data.description}</p>
                               <p className='font-semibold text-center'> {data.name}</p>
                            </div>
                        </div>
                    )
               })}
            </div>
      </div>
    </div>
  )
}

export default Testimonials
