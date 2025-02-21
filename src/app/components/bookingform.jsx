"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const Taxiform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState('');
  const [pickup, setPickup] = useState('');
  const [destination, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('4 Seater');

  const bookingData = async (e) => {
    e.preventDefault();

    try {
      console.log(date)
      console.log(time);
      
      const response = await axios.post('/api/telegram_msg', {
        name:name,
        email:email,
        phone:phone,
        passengers:passengers,
        pickup:pickup,
        destination:destination,
        date:date,
        time:time,
        carType:carType 
      });

      
    } catch (error) {
      console.error("Error booking ride:", error);
      
    }
  };
  return (
    <form onSubmit={bookingData} className="w-full bg-blue-500 text-white font-semibold p-6 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" onChange={e => setName(e.target.value)} value={name} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="email" placeholder="Email address" onChange={e => setEmail(e.target.value)} value={email} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="tel" placeholder="Phone" onChange={e => setPhone(e.target.value)} value={phone} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="number" placeholder="Number of Passengers" onChange={e => setPassengers(e.target.value)} value={passengers} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="text" placeholder="Pick up address" onChange={e => setPickup(e.target.value)} value={pickup} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            <input type="text" placeholder="Drop off address" onChange={e => setDropoff(e.target.value)} value={destination} className="w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none" />
            {/*Time Component*/}
          
            {/*component date*/}
            <DatePicker selected={date} onChange={(date)=>setDate(date)} dateFormat="dd/MM/yyyy" placeholderText='Date' minDate={new Date()} className=' w-full bg-gray-100 p-4 rounded-full text-gray-600 focus:outline-none '/>
          </div>

          {/* Car Type Selection */}
          <div className="mt-5">
            <h2 className="text-lg">Car Type</h2>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="car_type" value="4 Seater" checked={carType === "4 Seater"} onChange={() => setCarType("4 Seater")} className="accent-blue-600 scale-150" />
                4 Seater
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="car_type" value="6 Seater" checked={carType === "6 Seater"} onChange={() => setCarType("6 Seater")} className="accent-blue-600 scale-150" />
                6 Seater
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-6 w-full bg-white text-blue-600 font-bold py-3 rounded-full hover:bg-gray-200 transition">
            Book Now
          </button>
        </form>
  )
}

export default Taxiform