"use client"
import React from 'react'
import { FaAnchor } from "react-icons/fa";
import { LuAnchor } from "react-icons/lu";

export default function HeaderText({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="
  absolute 
  top-22 
  left-1/2 
  transform -translate-x-1/2 -translate-y-1/2 
  z-10 
  w-full 
  px-4
">
      <div className="flex gap-2 sm:gap-3 items-center justify-center">
        <LuAnchor
          className="
        text-yellow-400
        text-2xl
        sm:text-[18px] 
        md:text-3xl 
        lg:text-4xl
      "
        />
        <h1
          className="
    uppercase
    text-white
    font-extralight
    text-xl
    sm:text-[14px]
    md:text-2xl
    lg:text-4xl
    tracking-[2px]
    sm:tracking-[4px]
    md:tracking-[6px]
    leading-tight
    text-center
  "
        >
          {title}
        </h1>
      </div>

      <p
        className="
      text-gray-300 
      text-[10px] 
      sm:text-xs 
      md:text-sm 
      tracking-[3px] 
      sm:tracking-[5px] 
      md:tracking-[6px] 
      lg:tracking-[5px]
      text-center 
      mt-2 
      sm:mt-3 
      md:mt-4
    "
      >
        {desc}
      </p>
    </div>

  )
}
