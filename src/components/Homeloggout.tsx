"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import HeaderText from './Header/HeaderText'
import GuestSection from './Header/Guest/GuestSection'
import Countguestcard from './Header/Guest/Countguestcard'
import Guest from './Header/Guest/Guest'
import { Button } from './ui/button'
import { FaAngleRight } from "react-icons/fa6";

export default function Homeloggout() {
  const [state, setState] = useState({
    count: 1,
  })
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src={"/banner/banner4.jpg"}
        fill
        alt="banner img"
        className="object-center object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Header Text */}
      <HeaderText
        title="Party Yacht"
        desc={"DUBAI PREMIER YACHT EXPERIENCE"}
      />

      {/* Dots Indicator */}
      <div className="
        absolute 
        top-[23%] 
    
        w-full 
        z-10 
        flex 
        justify-center 
        gap-3
      ">
        <span className={`rounded-3xl h-0.75 w-8 sm:w-10 md:w-11 ${state.count === 0 ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
        <span className={`bg-gray-500 rounded-3xl  h-0.75 w-8 sm:w-10 md:w-11 ${state.count === 1 ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
        <span className={`bg-gray-500 rounded-3xl  h-0.75 w-8 sm:w-10 md:w-11 ${state.count === 2 ? 'bg-yellow-500' : 'bg-gray-500'}`}></span>
      </div>
      <Guest />

      <Button className="absolute bottom-14 right-1/4 transform -translate-x-1/2 bg-[#121317] hover:bg-yellow-600 text-gray-300 text-sm  py-4 px-9 rounded-full z-50">
        Continue <FaAngleRight />

      </Button>
    </div>
  )
}
