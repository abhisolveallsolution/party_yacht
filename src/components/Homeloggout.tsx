"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderText from "./Header/HeaderText";
import Guest from "./Header/Guest/Guest";
import Calender_Compo from "./Header/Calender/Calender_Compo";
import { useRouter, useSearchParams } from "next/navigation";

import dayjs, { Dayjs } from "dayjs";
export default function Homeloggout() {
  const [state, setState] = useState({
    guest: 0,
    date: ""
    // date: null
  })
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = Number(searchParams.get("tab") || 0);
  const params = new URLSearchParams(searchParams);
  const handleNextUpdate = () => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", "2");
    router.push(`?${params.toString()}`);
    console.log("date", state.date);
  };
  const handleDateChange = (newDate: string) => {
    setState((prev) => ({
      ...prev,
      date: newDate,
    }));
  };
  const handleUpdateComp = () => {
    params.set("tab", "1");
    router.push(`?${params.toString()}`);
  };
  const handleBackUpdate = () => {
    params.set("tab", "0");
    router.push(`?${params.toString()}`);
  }
  if (tab === 2) {
    router.push(
      `/fleet?guest=${state.guest}&date=${dayjs(state.date).format("YYYY-MM-DD")}`
    );
  }
  useEffect(() => {

  }, [state.date]);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden flex justify-center">
        {/* Background Image */}
        <Image
          src={"/banner/banner3.jpg"}
          fill
          alt="banner img"
          className="object-cover object-center"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-40 w-full max-w-screen-7xl mx-auto px-4">
          {/* Header */}
          <HeaderText
            title="Party Yacht"
            desc="DUBAI PREMIER YACHT EXPERIENCE"
          />

          {/* Dots Indicator */}
          <div className="absolute 
        top-34  sm:top-38   w-full z-10 flex justify-center gap-3">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`h-0.75 w-8 sm:w-10 md:w-12 rounded-full transition-all duration-300 ${tab === dot ? "bg-yellow-500" : "bg-gray-500"
                  }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4 z-40">
            <div

            >

              {/* Components based on tab */}
              {tab === 0 && (
                <Guest
                  guest={state.guest}
                  setState={setState}
                  tab={tab}
                  handleUpdateComp={handleUpdateComp} />
              )}

              {tab === 1 && (
                <Calender_Compo
                  tab={tab}
                  setState={setState}
                  handleBackUpdate={handleBackUpdate}
                  handleDateChange={handleDateChange}
                  handleNextUpdate={handleNextUpdate}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
