"use client"
import React from 'react'
import CalenderHeader from '../Calender/CalenderHeader';
import { LuCalendarDays } from 'react-icons/lu';
import { DateCalendarValue } from '../Calender/DateCalendarValue';
import { IoChevronBackSharp } from 'react-icons/io5';
import { FaAngleRight } from 'react-icons/fa';
import Countguestcard from '../Guest/Countguestcard';
import TimeSlotcard from './TimeSlotcard';

interface Departuretime {
  setState: any;
  guest: number;
  tab: number;
  handleBackUpdate: () => void;
  handleNextUpdate: () => void;
  handleDateChange: (newDate: string) => void;
  handleUpdateCompNext: () => void;
}
export default function Departuretime({
  tab,
  setState,
  guest,
  handleBackUpdate,
  handleNextUpdate,
  handleDateChange,
  handleUpdateCompNext }: Departuretime) {
  return (
    <>
      <div
        className={`${tab === 2 && "h-228"}
             mt-29
             border
             opacity-84
             ring ring-gray-800
             shadow-lg
             bg-[#1c1f26]
             rounded-2xl
             px-5 sm:px-6
             w-145
             py-6
             flex flex-col`}>

        <div className='text-white mb-4 flex flex-col justify-center items-center text-center '>
          <LuCalendarDays className='text-6xl text-yellow-400 border border-amber-300  rounded-2xl  px-3 py-3' />
          <CalenderHeader
            title={"Select Your Time"}
            desc={"Pick your preferred departure time & duration"}
          />
        </div>
        <div className="mt-6 w-full">
          <TimeSlotcard setState={setState} guest={guest} />
        </div>
        <div
          className="
       flex
       w-full
       max-w-xl
       mx-auto
       items-center
       justify-between
       gap-3
       flex-wrap
       mt-4
       px-2 sm:px-3
     "
        >
          <button
            type="button"
            className="
             cursor-pointer
         flex items-center gap-2
         bg-[#121317]
         text-gray-300
         text-sm 
         font-semibold
         py-3 px-5 sm:px-7
         rounded-full
         transition
         w-full sm:w-auto
         justify-center
         
       "
            onClick={handleBackUpdate}
          >
            <IoChevronBackSharp />
            Back
          </button>

          <button
            type="button"
            className="
             cursor-pointer
         flex items-center gap-2
         bg-[#121317]
         text-gray-300
         text-sm 
         font-semibold
         py-3 px-5 
         sm:px-4
         tracking-77
         rounded-full
         transition
         w-full sm:w-auto
         justify-center
       "
            onClick={handleNextUpdate}
          >
            Continue <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  )
}
