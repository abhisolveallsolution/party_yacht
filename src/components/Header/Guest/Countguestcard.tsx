"use client"
import React from 'react'

export default function Countguestcard() {
  const countguest = [
    {
      id: 1,
      value: 6
    }, {
      id: 2,
      value: 10
    }, {
      id: 3,
      value: 15
    }, {
      id: 4,
      value: 20
    }, {
      id: 5,
      value: 25
    }, {
      id: 6,
      value: 35
    }, {
      id: 7,
      value: 50
    }, {
      id: 8,
      value: 65
    }
  ]
  return (
    <div className='grid col-span-12'>
      <div className="
      mt-4
      sm: mt-4
      grid
      sm:grid-cols-4 
      grid-cols-4
      gap-2 
      sm:gap-3
      md:gap-4 
   
">
        {countguest.map((item, index) => {
          return (
            <div
              key={index}
              className="
              bg-[#30363e]
          text-gray-400
          text-md
          sm:text-xl 
          md:text-md
          font-bold 
          ring
          ring-gray-800 
          rounded-sm
          w-full h-13
          gap-1
          sm:w-full sm:h-16 
          md:w-full md:h-15 
          flex 
          items-center 
          justify-center 
          cursor-pointer 
          hover:bg-[#22252d] 
          transition 
          duration-300
        "
            >
              <span>{item.value}+</span>
            </div>
          )
        })}
      </div>
    </div>

  )
}
