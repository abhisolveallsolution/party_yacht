"use client"
import React from 'react'
import { FiUsers } from "react-icons/fi";

export default function GuestSection({ title, desc }: { title: string, desc: string }) {
  return (
    <div >
      <div className='text-white mb-4 flex flex-col justify-center items-center text-center'>
        <FiUsers className='text-6xl text-yellow-400 border border-amber-300  rounded-2xl  px-3 py-3' />
        <div className='mt-6'>
          <h1 className='text-lg sm:text-3xl 
            '>{title}?</h1>
          <p className='text-sm sm:text-[14px] tracking-[1px]  text-gray-400 mt-2 '>{desc}</p>
        </div>
      </div>
    </div>
  )
}
