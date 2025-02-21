import React from 'react';
import { motion } from 'framer-motion';

const FastBooking = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className='px-5 flex flex-col md:flex-row md:justify-between items-center'
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className='text-white'
      >
        <p className='font-bold text-2xl text-center sm:text-left'>FAST BOOKING</p>
        <p className='w-72 font-medium sm:w-80 md:w-96 lg:w-[450px] py-5 text-justify'>
          "Fast & Hassle-Free Booking: Our easy-to-use platform helps you book your taxi in just a few clicks. 
          Choose your pickup location, select the date, and you're all set for a smooth, stress-free ride!"
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form>
          <div className='flex flex-col gap-5 w-[300px] sm:w-[350px] md:w-[300px] lg:w-[450px]'>
            <motion.input 
              type="text" 
              className='w-full py-2 px-2 rounded-lg' 
              placeholder='Enter your pickup location' 
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input 
              type="text" 
              className='w-full py-2 px-2 rounded-lg' 
              placeholder='Mobile number' 
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button 
              className='font-bold bg-white text-blue-950 py-2 px-2 shadow-sm rounded-lg' 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default FastBooking;
