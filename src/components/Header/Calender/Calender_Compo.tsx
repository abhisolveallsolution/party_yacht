"use client";

import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DateCalendarValue } from "./DateCalendarValue";
import { FaAngleRight } from "react-icons/fa6";
import { IoChevronBackSharp } from "react-icons/io5";
import CalenderHeader from "./CalenderHeader";
import { LuCalendarDays } from "react-icons/lu";

type Props = {
  setState: any;
  tab: any;
  handleBackUpdate: () => void;
  handleNextUpdate: () => void;
};

export default function Calender_Compo({
  handleBackUpdate,
  handleNextUpdate,
  setState,
  tab,
}: Props) {

  // const [value, setValue] = useState<Dayjs | null>(dayjs());

  // whenever user changes date → update parent
  // useEffect(() => {
  //   setState((prev: any) => ({
  //     ...prev,
  //     date: value?.format("YYYY-MM-DD"),
  //   }));
  // }, [value, setState]);

  return (
    <>
      <div className={`${tab === 1 && "h-128"}
          mt-29 sm:mt-38  lg:mt-40
          opacity-84
          ring ring-gray-800
          shadow-lg
          bg-[#1c1f26]
          rounded-2xl
      
          w-145
          max-w-2xl
          mx-auto
            
          min-h-[400px]
          sm:min-h-[400px]
      
          px-5 sm:px-6
          py-6
      
          flex flex-col`}>

        <div className='text-white mb-4 flex flex-col justify-center items-center text-center '>
          <LuCalendarDays className='text-6xl text-yellow-400 border border-amber-300  rounded-2xl  px-3 py-3' />
          <CalenderHeader />
        </div>
        <div className=" flex justify-center items-center h-66 ">
          <DateCalendarValue
            setState={setState}
          />
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
  );
}
