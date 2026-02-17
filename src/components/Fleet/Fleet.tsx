"use client";
import React from 'react'
import FNavbar from './Navbar/FNavbar'
import LabelComponuts from './label/LabelComponuts'
import { useRouter, useSearchParams } from "next/navigation";
import { GoPeople } from 'react-icons/go';
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import Yachtscard from "./Card/Yachtscard"
export default function Fleet() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const guest = searchParams?.get("guest");
  const date = searchParams?.get("date");
  console.log("params:-", guest);
  console.log("params:-", date);
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
            <div className="flex items-center gap-2 font-extralight px-3 py-2">
              <span className=" text-gray-400 font-bold text-sm">
                Most Popular
              </span>
            </div>
            <div className="flex items-center gap-2 border border-[#aa915c] bg-[#30291a] rounded-2xl px-2 py-1 text-center">
              <span className="text-[#aa915c] font-bold text-sm">
                Price
              </span>
              <IoMdArrowUp className="text-[#aa915c]" />
            </div>
            <div className="flex items-center gap-2   rounded-2xl px-2 py-1 text-center">
              <span className="text-gray-400 font-bold text-sm">
                Price
              </span>
              <IoArrowDownSharp className='text-gray-400' />
            </div>
            <div className="flex items-center gap-2   rounded-2xl px-2 py-1 text-center">
              <span className="text-gray-400 font-bold text-sm">
                Capacity
              </span>
            </div>
            <div className="flex items-center gap-2   rounded-2xl px-2 py-1 text-center">
              <span className="text-gray-500 font-bold text-sm">
                Size
              </span>
            </div>
          </div>
        </div>
      </div>
      <Yachtscard />
    </>
  )
}
