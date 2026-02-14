"use client"
import React, { useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import CalenderHeader from './CalenderHeader';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;


type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function Calender_Compo() {

  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <div className='text-white mb-4 flex flex-col justify-center items-center text-center '>
        <LuCalendarDays className='text-7xl text-yellow-400 border border-amber-300  rounded-2xl  px-3 py-3' />
        <CalenderHeader />
      </div>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          view="month"
        />

      </div>
    </div>
  )
}
