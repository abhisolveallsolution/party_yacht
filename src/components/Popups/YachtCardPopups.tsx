"use client"
import { IconType } from "react-icons";
import React from 'react'
import { LuAnchor } from "react-icons/lu";
import { motion } from "motion/react"

interface YachtCardPopupsInterface {
  handleCardModelClose: () => void;
  IoCloseOutline: IconType
}
export default function YachtCardPopups({ handleCardModelClose, IoCloseOutline }: YachtCardPopupsInterface) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-sm"
        // onClick={handleCardModelClose}
        />

        {/* MODAL */}
        <div
          className="
          relative z-10
          w-full max-w-lg
          rounded-lg
          overflow-hidden
          ring ring-gray-800
          shadow-xl
          bg-[#12121a]
        "
        >
          {/* CONTENT */}
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Close button */}
            <div className="flex justify-end text-2xl text-gray-500 cursor-pointer">
              <IoCloseOutline onClick={handleCardModelClose} />
            </div>

            {/* Header */}
            <div className="flex gap-3 items-center">
              <LuAnchor className="text-[#aa915c] text-xl" />
              <span className="text-white font-light text-lg tracking-wide">
                50 Pax - 70ft
              </span>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="rounded-md bg-gray-800 py-2 text-center">
                <p className="text-[11px] text-gray-400">DATE</p>
                <p className="text-sm text-white">Feb 13</p>
              </div>

              <div className="rounded-md bg-gray-800 py-2 text-center">
                <p className="text-[11px] text-gray-400">TIME</p>
                <p className="text-sm text-white">16:00 - 20:00</p>
              </div>

              <div className="rounded-md bg-gray-800 py-2 text-center">
                <p className="text-[11px] text-gray-400">TOTAL</p>
                <p className="text-sm text-[#cbac64]">AED 4,000</p>
              </div>
            </div>

            <hr className="border-gray-800 my-4" />

            {/* Form */}
            <div>
              <label className="text-[13px] text-gray-400">FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-2 mb-3 p-2 rounded-md bg-[#1b1b23] text-sm outline-none"
              />

              <label className="text-[13px] text-gray-400">EMAIL</label>
              <input
                type="text"
                placeholder="your@email.com"
                className="w-full mt-2 mb-3 p-2 rounded-md bg-[#1b1b23] text-sm outline-none"
              />

              <label className="text-[13px] text-gray-400">PHONE</label>
              <input
                type="text"
                placeholder="+971 XX XXX XXXX"
                className="w-full mt-2 mb-3 p-2 rounded-md bg-[#1b1b23] text-sm outline-none"
              />

              <label className="text-[13px] text-gray-400">
                SPECIAL REQUESTS
              </label>
              <textarea
                rows={3}
                placeholder="Anything we should know?"
                className="w-full mt-2 p-2 rounded-md bg-[#1b1b23] text-sm outline-none"
              />
            </div>
          </div>

          {/* Footer Button */}
          <div className="px-4 py-3">
            <button
              // onClick={handleCardModelClose}
              className="
              w-full
              py-2
              rounded-full
              bg-black
              text-white
              text-sm
              font-medium
              hover:bg-gray-700
              transition
              cursor-pointer
            "
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
