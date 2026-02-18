"use client";
import React, { useState } from 'react'
import FNavbar from './Navbar/FNavbar'
import LabelComponuts from './label/LabelComponuts'
import { useRouter, useSearchParams } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import Yachtscard from "./Card/Yachtscard"
import YachtCardPopups from '../Popups/YachtCardPopups';
export default function Fleet() {
  const LabelItems = [
    {
      id: 1,
      title: "Most Popular"
    },
    {
      id: 2,
      title: "Price"
    },
    {
      id: 3,
      title: "Price"
    },
    {
      id: 4,
      title: "Capacity"
    },
    {
      id: 5,
      title: "Size"
    }
  ]
  const [state, setState] = useState({
    toggle: false
  })
  const router = useRouter();
  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest");
  const date = searchParams?.get("date");
  const handleCardModelOpen = () => {
    setState((prev) => ({ ...prev, toggle: !state.toggle }))
  }
  const handleCardModelClose = () => {
    setState((prev) => ({ ...prev, toggle: !state.toggle }))
  }
  return (
    <>
      <div>
        <FNavbar />
      </div>
      <div>
        <LabelComponuts guest={guest} date={date} />
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 px-3 py-8">
          <div>
            <h1 className='text-2xl'>Available Yachts</h1>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-3 py-3">
            {LabelItems.map((item: any, index: number) => {
              return (
                <div key={index} className={`flex items-center gap-1   rounded-2xl px-2 py-1 text-center ${item.id === 2 && " border border-[#aa915c] bg-[#30291a] "}`}>
                  <span className={`${item.id === 2 ? "text-[#aa915c] " : "text-gray-500"}  font-bold text-sm  cursor-pointer`}>
                    {item.title}
                  </span>
                  {item.id === 2 && (
                    <IoMdArrowUp className="text-[#aa915c]" />
                  )}   {item.id === 3 && (
                    <IoArrowDownSharp className='text-gray-500' />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Yachtscard handleCardModelOpen={handleCardModelOpen} />
      {state.toggle && (
        <YachtCardPopups
          IoCloseOutline={IoCloseOutline}
          handleCardModelClose={handleCardModelClose}
        />
      )}
    </>
  )
}
