
"use client"
import Link from 'next/link';
import React from 'react'
import { LuAnchor } from "react-icons/lu";

export default function FNavbar() {
  return (
    <div className="w-full fixed z-50 bg-[#0a090e]">
      <div className="flex items-center justify-between gap-3 shadow-[0_2px_0_0_rgba(255,255,255,0.1)] py-4 px-4">

        <div className="flex items-center gap-3">
          <LuAnchor className='text-3xl sm:text-3xl  text-[#937d48]' />
          <Link href={"/"} className="cursor-pointer text-2xl font-extralight tracking-[3px]  sm:text-2xl ">
            PARTY YACHT
          </Link>
        </div>
        <span className="text-[14px] text-gray-400">7 yeachts avilable</span>
      </div>
    </div>

  )
}
