"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import dayjs from "dayjs";
type BookingState = {
  handleDateChange: (newDate: string) => void;
};



export function DateCalendarValue({ handleDateChange }: BookingState) {

  const handleSelect = (value: Date | undefined) => {
    if (value) {
      const formatted: any = dayjs(value).format("YYYY-MM-DD");
      handleDateChange(formatted);
    }
    // console.log("selected date:", value);
  };


  return (
    <Calendar
      mode="single"
      onSelect={handleSelect}
      disabled={{ before: new Date() }}
      className="rounded-lg ring ring-gray-600 bg-[#1d2228] text-white"
    />

  );
}
