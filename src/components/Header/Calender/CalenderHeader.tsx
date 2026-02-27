"use client"
import React from 'react'
interface CalenderHeaderInterface {
  title: string;
  desc: string
}
export default function CalenderHeader({ title, desc }: CalenderHeaderInterface) {
  return (
    <div>
      <h1 className='text-lg sm:text-2xl  mt-4
            '>{title}</h1>
      <p className='text-sm sm:text-[14px] tracking-[1px]  text-gray-400 mt-2 '>{desc}</p>
    </div>
  )
}
