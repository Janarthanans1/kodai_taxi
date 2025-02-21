import React from 'react'
import { RiTaxiFill,RiRoadMapFill,RiCarFill } from 'react-icons/ri'

const Services = () => {
    
  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-3xl  pb-4'>Services</h1>
            <p className='font-medium text-justify  sm:text-center'>
                "Your Journey, Our Priority. We provide reliable and affordable taxi services, ensuring a smooth and comfortable travel experience. Whether it’s a quick city ride, a long-distance trip, or a flexible rental service, we are available 24/7 to meet your travel needs with safety and convenience."
            </p>
        </div>
        {/*services*/}
        <div className='flex flex-col gap-16 md:flex-row md:gap-2 lg:gap-10 justify-evenly items-center pt-20 '>
            {/*service 1*/}
            <div className="relative w-72 sm:w-3/4 h-fit bg-white rounded-lg shadow-lg p-6">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-color_3 text-white text-5xl rounded-full flex justify-center items-center shadow-xl">
                  <RiTaxiFill />
                </div>
                <div className="mt-12 text-center">
                  <h2 className="text-xl font-semibold mb-2">Local Rides</h2>
                  <p className="text-gray-700 text-sm text-justify">
                    Enjoy quick and affordable taxi rides within the city for your daily commute, shopping, or errands. Book a cab anytime for a hassle-free experience.
                  </p>
                </div>
            </div>
            {/*service 2*/}
            <div className='relative w-72 sm:w-3/4 h-fit bg-white rounded-lg shadow-lg p-6'>
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-color_3 text-white text-5xl rounded-full flex justify-center items-center shadow-xl'><RiRoadMapFill/></div>
                <div className="mt-12 text-center">
                  <h2 className="text-xl font-semibold  mb-2">Outstation Rides</h2>
                  <p className="text-gray-700 text-sm text-justify">
                  Travel beyond city limits with our reliable outstation taxi service. Choose one-way or round-trip rides and enjoy a safe and comfortable journey.
                  </p>
                </div>
            </div>
            {/*service 3*/}
            <div className='relative w-72 sm:w-3/4 h-fit bg-white rounded-lg shadow-lg p-6'>
                <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-color_3 text-white text-5xl rounded-full flex justify-center items-center shadow-xl'><RiCarFill/></div>
                <div className="mt-12 text-center">
                  <h2 className="text-xl font-semibold  mb-2">Rental Rides</h2>
                  <p className="text-gray-700 text-sm text-justify">
                  Need a cab for multiple hours? Our rental service lets you book a taxi with flexible stops, perfect for business meetings, sightseeing, or personal trips.
                  </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services