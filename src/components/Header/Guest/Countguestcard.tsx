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
  grid 
  grid-cols-4
  gap-3 
  sm:gap-4 
  md:gap-6 
  
">
        {countguest.map((item, index) => {
          return (
            <div
              key={index}
              className="
              bg-[#22262f]
          text-gray-300
          text-md
          sm:text-xl 
          md:text-md
          font-bold 
          border 
          border-gray-500 
          rounded-md
          w-18 h-14 
          sm:w-16 sm:h-16 
          md:w-26 md:h-16 
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
