"use client"
import React from 'react'
import { GoPeople } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import moment from "moment";
import { IoTimeOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";

interface LabelProps {
  date: string | null,
  guest: string | null
}


export default function LabelComponuts({ date, guest }: LabelProps) {


  const date1 = moment(date).format('MMM-DD-YYYY')
  return (
    <div className="flex relative top-14 flex-wrap items-center justify-between gap-4 px-3 py-8">
      {/* Left group */}
      <div className="flex flex-wrap items-center gap-3 ">
        <div className="flex items-center gap-2 border border-gray-700 rounded-2xl px-3 py-2">
          <GoPeople className="text-[#aa915c]" />
          <span className="text-gray-400 font-bold text-md">
            {guest} Guest
          </span>
        </div>
        <div className="flex items-center gap-2 border border-gray-700 rounded-2xl px-3 py-2">
          <CiCalendar className="text-[#aa915c]" />
          <span className="text-gray-400 font-bold text-md">
            {date1}
          </span>
        </div>

        <div className="flex items-center gap-2 border border-gray-700 rounded-2xl px-3 py-2">
          <IoTimeOutline className="text-[#aa915c]" />
          <span className="text-gray-400 font-bold text-md">
            14:00-18:00 (4h)
          </span>
        </div>

        <div className="flex items-center gap-2 border border-gray-700 rounded-2xl px-3 py-2">
          <CiFilter />
          <span className="text-gray-400 font-bold text-md">
            Advance Filter
          </span>
        </div>
      </div>

      {/* Right button */}
      <div className="flex items-center gap-2 rounded-2xl px-3 py-2">
        <MdFormatListBulletedAdd className="text-[#aa915c]" />
        <span className="text-[#aa915c] font-bold text-md">
          Change Filter
        </span>
      </div>

    </div>

  )
}
