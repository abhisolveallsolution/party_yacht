"use client"

import React, { useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"

export function DateCalendarValue({ setState }: any) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  useEffect(() => {
    setState((prev: any) => ({
      ...prev,
      date: date ? date.toISOString().split('T')[0] : undefined,
    }));
    console.log("Selected date:", date)
  }, [date, setState])
  return (
    <Calendar
      onSelect={setDate}
      disabled={{ before: new Date() }}
      mode="single" className="rounded-lg w-66   ring ring-gray-600 bg-[#1d2228] text-white" />
  )
}
