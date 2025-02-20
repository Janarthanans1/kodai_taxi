"use client"
import { animate, AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { PiSignInBold, PiTaxiFill } from 'react-icons/pi'
import { RiHome9Fill } from 'react-icons/ri'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdContacts } from 'react-icons/md'
import Link from 'next/link'

const MobileMenu = ({open,auth,path}) => {
  return (
    <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div 
                    initial={{opacity:0,y:-100}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0,y:-100}}
                    transition={{duration:0.3}}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='md:hidden text-lg font-semibold bg-color_1 px-7 py-7 rounded-2xl shadow-lg'>
                        <ul className='flex flex-col  justify-center items-start gap-4' >
                            <li className={`${path === "/" ? "bg-color_3 text-color_1 w-full pr-5 py-2 rounded-lg  " : ""} relative flex items-center gap-2  group`}>
                                <RiHome9Fill/>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={`${path === "/pages/book_a_ride" ? "bg-color_3 text-color_1 w-full pr-5 py-2 rounded-lg " : ""} relative  flex items-center gap-2  group`}> 
                              <PiTaxiFill/>
                              <Link href="/pages/book_a_ride">Book A Ride</Link>
                            </li>
                            <li className={`${path === "/pages/aboutus" ? "bg-color_3 text-color_1 w-full pr-5 py-2 rounded-lg " : ""} relative flex items-center gap-2  group`}>
                              <FaPeopleGroup/>
                              <Link href="/pages/aboutus">About Us</Link>
                            </li>
                            <li className={`${path === "/pages/contactus" ? "bg-color_3 text-color_1 w-full pr-5 py-2 rounded-lg  " : ""} relative flex items-center gap-2  group`}>
                              <MdContacts/>
                              <Link href="/pages/contactus">Contact Us</Link>
                            </li>
                            {auth?(
                              <li className={`${path === "/pages/Userprofile" ? "bg-color_3 text-color_1 w-full pr-5 py-2 rounded-lg " : ""} relative flex items-center gap-2  group`}>
                                <FaUserCircle/>
                                <Link href="/pages/Userprofile">Profile</Link>
                              </li>
                            ):(
                              <li className={`${path === "/pages/auth/signin" ? "bg-color_3    text-color_1 w-full pr-5 py-2 rounded-lg " : ""} relative flex items-center gap-2  group`}>
                                <PiSignInBold/>
                                <Link href="/pages/auth/signin">Sign In</Link>
                              </li>
                            )}
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default MobileMenu