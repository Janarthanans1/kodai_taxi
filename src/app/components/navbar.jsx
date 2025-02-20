"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { PiSignInBold, PiTaxiFill } from 'react-icons/pi'
import { RiHome9Fill } from 'react-icons/ri'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdContacts } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
  const [authUser,setAuthUser] = useState(false)
  const {push} = useRouter()
  const path = usePathname()
  return (
    <nav className='fixed w-full bg-color_1 shadow-xl flex items-center justify-between  font-semibold px-5 py-5 md:px-20'>
      {/*logo*/}
      <div className='min-w-fit px-5 font-bold text-lg sm:text-xl'>
        <p className='tracking-widest '><span className='text-color_3'>KG</span> Taxi</p>
      </div>
      {/*menu*/}
      <div>
        <ul className='hidden min-w-[525px] md:flex space-x-5 lg:space-x-10'>
          <li className='relative flex items-center gap-2 hover:text-color_3 group'>
            <RiHome9Fill/>
            <Link href="/">Home</Link>
            <span className="absolute bottom-0 top-7 left-0 w-full h-0.5 bg-color_3 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className='relative flex items-center gap-2 hover:text-color_3 group'> 
            <PiTaxiFill/>
            <Link href="/pages/book_a_ride">Book A Ride</Link>
            <span className="absolute bottom-0 top-7 left-0 w-full h-0.5 bg-color_3 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className='relative flex items-center gap-2 hover:text-color_3 group'>
            <FaPeopleGroup/>
            <Link href="/pages/aboutus">About Us</Link>
            <span className="absolute bottom-0 top-7 left-0 w-full h-0.5 bg-color_3 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
          <li className='relative flex items-center gap-2 hover:text-color_3 group'>
            <MdContacts/>
            <Link href="/pages/contactus">Contact Us</Link>
            <span className="absolute bottom-0 top-7 left-0 w-full h-0.5 bg-color_3 transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </li>
        </ul>
      </div>
      {/*signin or profile*/}
      {authUser?(
        <button className='min-w-fit relative md:h-5  lg:h-11 md:w-36 overflow-hidden border-2 border-color_3  shadow-lg transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-color_3 before:duration-300 before:ease-out hover:text-white  hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-lg' onClick={()=>push('/pages/userprofile')}>
          <div className='relative flex justify-center items-center gap-2 z-10'>
            <FaUserCircle/>
            Profile
          </div>
        </button>
      ):(
        <button className='min-w-fit relative h-11 w-36 overflow-hidden border-2 border-color_3  shadow-lg transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-color_3 before:duration-300 before:ease-out hover:text-white  hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded-lg' onClick={()=>push('/pages/auth/signin')}>
          <div className='relative flex justify-center items-center gap-2 z-10'>
            <PiSignInBold/>
            Sign In
          </div>
        </button>
      )}
    </nav> 
  );
}

export default Navbar