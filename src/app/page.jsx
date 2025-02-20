"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const {push} = useRouter()
  return (
    <div className=' h-screen'>
        <header className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg"
          onClick={()=>push('/pages/book_a_ride')}
        >
          Book a Ride
        </motion.button>
      </motion.div>
    </header>
        
        <div className="h-screen bg-red-700"></div>
    </div>
  );
}
