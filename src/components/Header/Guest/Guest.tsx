"use client"
import React from 'react'
import GuestSection from './GuestSection'
import Countguestcard from './Countguestcard'

export default function Guest() {
  return (
    <>
      {/* Guest Section Card */}
      <div className="
        absolute 
        top-[35%] 
        sm:top-[50%] 
        md:top-[28%]
        w-full 
        z-50 
        flex 
        justify-center
        px-4
      ">
        <div className="
    ring ring-gray-500
          
          px-4 
          sm:px-6 
          py-4 
          sm:py-6
          rounded-2xl 
          bg-[#1c1f26]
          w-full 
          sm:w-[80vw] 
          md:w-[60vw] 
          lg:w-[48vw]
          h-[470px]
        ">
          <GuestSection
            title={"How Many Guests "}
            desc={"Select the number of passengers for your voyage."}
          />
        </div>
      </div>

      {/* Count Guest Text */}
      <div className="
        absolute 
        top-[55%] 
        sm:top-[65%] 
        md:top-[61%]
        w-full 
        z-50 
        flex 
        justify-center
      ">
        <Countguestcard />
      </div>
    </>
  )
}
