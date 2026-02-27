"use client"
import React, { useEffect } from 'react'
interface BookingState {
  guest: number
}
interface Countguestcardinterface {
  setState: React.Dispatch<React.SetStateAction<BookingState>>;
  guest: number
}
export default function TimeSlotcard({ setState, guest }: Countguestcardinterface) {



  const countguest = [
    {
      id: 1,
      value: "08:00"
    }, {
      id: 2,
      value: 10
    }, {
      id: 3,
      value: 15
    }, {
      id: 4,
      value: 20
    }, {
      id: 5,
      value: 25
    }, {
      id: 6,
      value: 35
    }, {
      id: 7,
      value: 50
    }, {
      id: 8,
      value: 65
    }
  ]
  const handleGuestClick = (item: any) => {
    const { id, value } = item;

    setState((prev: any) => ({
      ...prev,
      guest: value
    }))
  }
  useEffect(() => {
    // console.log("guest updated value:--", guest);
  }, [])
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="border">01</div>
        <div className="border">01</div>
        <div className="border">01</div>
        <div className="border">01</div>
        <div className="border">01</div>
        <div className="border">01</div>
      </div>
    </>

  )
}
