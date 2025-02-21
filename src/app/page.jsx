"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";
import BookingBtn from "./components/bookingbtn.jsx"
import Footer from '@/app/components/footer'
import WhyChooseUs from '@/app/components/whychooseus'
import Services from '@/app/components/services'
import FastBooking from '@/app/components/fastbooking'

export default function Home() {
  const {push} = useRouter()
  return (
    <div className=' h-screen'>
        <header className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gray-500"></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center max-w-2xl px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Zoom through the city with <span className="text-yellow-400 ">KODAI GANESH CALL TAXI!</span></h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Fast, reliable, and just a call away – because your journey deserves the best!
            </p>
            <div>
              <BookingBtn/>
            </div>
          </motion.div>
        </header>
        
        {/*services section*/}
        <section className="py-10 px-5 md:px-10 lg:px-20">
          <Services/>
        </section>

        {/*fast booking*/}
        <section className="bg-color_2 py-10 px-5 md:px-10 lg:px-20">
          <FastBooking/>
        </section>

        {/*why choose us*/}
        <section className="py-10 px-5 md:px-10 lg:px-20">
          <WhyChooseUs/>
        </section>

        {/*footer*/}
        <footer className="bg-blue-950 px-5 md:px-10 lg:px-20">
          <Footer/>
        </footer>
    </div>
  );
}
