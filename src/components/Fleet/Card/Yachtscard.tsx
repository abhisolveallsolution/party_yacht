"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { GiThermometerScale } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { Skeleton } from "@/components/ui/skeleton"
interface YachtscardInterface {
  handleCardModelOpen: () => void,
}
export default function Yachtscard({ handleCardModelOpen }: YachtscardInterface) {
  const [state, setState] = useState({
    url: "/banner/banner3.jpg"
  })
  return (
    <div>
      <div className="w-full px-4">
        <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <div
              key={index}
              className="
          relative
          rounded-2xl
          overflow-hidden
          ring ring-gray-800
          hover:ring-yellow-800
          bg-[#111]
          flex flex-col
        "
            >
              {/* Image */}
              {!state.url ?

                <Skeleton className="h-55 w-full" />
                :
                <Image
                  src={state.url}
                  width={500}
                  height={300}
                  alt="banner img"
                  className="w-full h-56 object-cover"
                />
              }
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none" />

              {/* Price badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-3 py-1 rounded-xl bg-[#c8a75b] text-gray-800 text-sm font-bold">
                  AED 1,000/hr
                </span>
              </div>
              {/* Info overlay */}
              <div className="absolute top-40 left-4 z-10 text-white">
                <h2 className="text-lg font-bold">50 Pax - 70ft</h2>

                <div className="flex gap-4 text-sm text-gray-300 mt-2 flex-wrap">
                  <span className="flex gap-1 items-center">
                    <FiUsers /> 50 Guest
                  </span>
                  <span className="flex gap-1 items-center">
                    <GiThermometerScale /> AC
                  </span>
                  <span className="flex gap-1 items-center">
                    <CiLocationOn /> Dubai Marina
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4 text-gray-300 flex flex-col flex-1">
                <p className="text-sm mb-3">
                  Mega yacht for corporate events and large parties
                </p>
                <div className="mt-auto flex justify-between items-end">
                  <div>
                    <p className="text-sm">Starting from</p>
                    <div className="flex items-center gap-3 mt-2">
                      <h1 className="text-[#c8a75b] text-2xl font-semibold">
                        AED 1,000
                      </h1>
                      <span className="text-xs text-gray-400">+5% VAT</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCardModelOpen}
                    className="bg-black ring cursor-pointer ring-gray-700 rounded-xl px-4 py-2 text-white text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
