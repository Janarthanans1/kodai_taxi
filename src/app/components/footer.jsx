"use client"
import React from 'react'
import Link from 'next/link'
import { IoMdMail,IoMdCall } from 'react-icons/io'


const Footer = () => {
  return (
    <div className='text-white bg-blue-950 py-5 px-10 lg:px-20 '>
      <div className='flex flex-col my-10 md:flex-row md:justify-between md:gap-10 '>
        {/*logo and company name*/}
        <div className='min-w-64 mb-10'>
          <h1 className='font-bold text-xl'>KODAI GANESH CALL TAXI</h1>
          <p className='text-gray-300 mt-5'>We take you anywhere, anytime with our reliable 24/7 taxi service.</p>
        </div>

        {/*About,Links,Contact*/}
        <div className='flex flex-col gap-5 md:flex-row md:gap-10 '>
          <div className='w-fit md:w-60'>
            <h1 className='font-bold text-xl'>Links</h1>
            <ul className='text-gray-300 mt-5'>
              <li className='hover:text-white mb-3'><Link href='/'>Home</Link></li>
              <li className='hover:text-white mb-3'><Link href='/pages/booking'>Get a Taxi</Link></li>
              <li className='hover:text-white mb-3'><Link href='/pages/about'>About</Link></li>
              <li className='hover:text-white mb-3'><Link href='/pages/contact'>Contact Us</Link></li>
            </ul>
          </div>
          {/*Contact*/}
          <div className='w-fit'>
            <h1 className='font-bold text-xl'>Contact</h1>
            <div className='mt-5'>
              <p className='text-gray-300'>86 Road Broklyn Street, 600 New York, USA</p>
              <p className='flex items-center gap-2 mt-3'><span className=''><IoMdMail/></span>jja4056@gmail.com</p>
              <p className='flex items-center gap-2 mt-3'><span className='inline'><IoMdCall/></span>9344564794</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex justify-between flex-col md:flex-row mt-5'>
        <div className='flex items-center gap-2'>
          <p className='font-bold text-xl'><span className='mr-1'>KG</span>Taxi</p>
          <p>&#xA9;</p>
        </div>
        <div className='flex gap-5'>
          <p><Link href=''>Terms of Use</Link></p>
          <p><Link href=''>Privacy Policy</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
