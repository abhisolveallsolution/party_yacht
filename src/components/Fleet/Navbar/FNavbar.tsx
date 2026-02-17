
import React from 'react'
import { FaAnchor } from "react-icons/fa";
import { MdAnchor } from "react-icons/md";

export default function FNavbar() {
  return (
    <div className="w-full fixed z-50 bg-[#0a090e]">
      <div className="flex items-center justify-between gap-3 shadow-[0_2px_0_0_rgba(255,255,255,0.1)] py-4 px-4">

        <div className="flex items-center gap-3">
          <MdAnchor className='text-3xl sm:text-3xl  text-[#937d48]' />
          <h1 className="text-2xl font-extralight tracking-[3px]  sm:text-2xl ">
            PARTY YACHT
          </h1>
        </div>
        <span className="text-[14px] text-gray-400">7 yeachts avilable</span>
      </div>
    </div>

  )
}
