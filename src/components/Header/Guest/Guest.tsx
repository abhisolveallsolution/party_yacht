"use client"
import React from "react"
import GuestSection from "./GuestSection"
import Countguestcard from "./Countguestcard"

export default function Guest() {
  return (

    <>
      <GuestSection
        title="How Many Guests"
        desc="Select the number of passengers for your voyage."
      />

      <div className="mt-6">
        <Countguestcard />
      </div>
    </>

  )
}
//   sm:max-w-lg