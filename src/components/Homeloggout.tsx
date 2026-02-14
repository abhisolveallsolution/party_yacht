"use client"
import React, { useState } from "react"
import Image from "next/image"
import HeaderText from "./Header/HeaderText"
import Guest from "./Header/Guest/Guest"
import { FaAngleRight } from "react-icons/fa6"
import Calender_Compo from "./Header/Calender/Calender_Compo"

export default function Homeloggout() {
  const [state, setState] = useState({
    count: 0,
  })
  const handleUpdateComp = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }))
  }
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center">

      {/* Background Image */}
      <Image
        src={"/banner/banner3.jpg"}
        fill
        alt="banner img"
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-40 w-full max-w-screen-7xl mx-auto px-4">
        {/* Header Text */}
        <HeaderText
          title="Party Yacht"
          desc="DUBAI PREMIER YACHT EXPERIENCE"
        />

        {/* Dots Indicator */}
        <div className="absolute top-38 sm:top-38  w-full z-10 flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={` h-0.75 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 ${state.count === dot ? "bg-yellow-500" : "bg-gray-500"
                }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 z-40 ">

          <div
            className="
            mt-39
          sm:mt-39
          opacity-84
    ring ring-gray-800
    shadow-lg
    bg-[#1c1f26]
    rounded-2xl
    h-100
    sm:h-110
    md:h-129
    px-5
    sm:px-6
    py-6
    sm:w-[60vw]
   max-w-150
  "
          >
            {state.count != null && state.count === 0 && <Guest />}
            {state.count != null && state.count === 1 && <Calender_Compo />}


            <button
              type="button"
              className="
            ring ring-gray-800
    absolute
    bottom-13
    right-1/2
    sm:right-101
    -translate-x-1/2
    w-[90%]
    sm:w-auto
    flex
    items-center
    justify-center
    gap-4
    bg-[#121317]
    text-gray-400
    text-md
    sm:text-lg
    md:text-md
    font-bold
    py-2
    px-9
    cursor-pointer
    rounded-full
    transition duration-300
  "
              onClick={handleUpdateComp}
            >
              Continue <FaAngleRight />
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}
