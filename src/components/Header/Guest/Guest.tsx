"use client";
import React from "react";
import GuestSection from "./GuestSection";
import Countguestcard from "./Countguestcard";
import { FaAngleRight } from "react-icons/fa6";
interface GuestInterface {
  handleUpdateComp: () => void;
  tab: any;
  setState: any;
  guest: number;
}
export default function Guest({
  handleUpdateComp,
  setState,
  guest,
  tab,
}: GuestInterface) {
  return (
    <>
      <div
        className={`
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
          flex flex-col`}
      >
        <GuestSection
          title="How Many Guests"
          desc="Select the number of passengers for your voyage."
        />
        <div className="mt-6">
          <Countguestcard setState={setState} guest={guest} />
        </div>
        <div className="flex justify-end items-center w-full h-22 mt-4">
          <button
            type="button"
            className="
                        flex items-center gap-4
                        bg-[#121317]
                        text-gray-400
                        text-md 
                        font-bold
                        py-3 px-7
                        cursor-pointer
                        rounded-full
                        transition duration-300
                      "
            onClick={handleUpdateComp}
          >
            Continue <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
}
