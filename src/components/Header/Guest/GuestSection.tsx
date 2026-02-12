"use client"
import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";

export default function GuestSection({ title, desc }: { title: string, desc: string }) {
  return (
    <div >
      <div className='text-white flex flex-col justify-center items-center text-center'>
        <HiMiniUserGroup className='text-6xl text-yellow-400 border border-amber-300  rounded px-2 py-2' />
        <div className='mt-3'>
          <h1 className='text-3xl'>{title}?</h1>
          <p className='text-md font-bold text-gray-400 mt-2 '>{desc}</p>
        </div>
      </div>
    </div>
  )
}
