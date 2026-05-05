"use client"

import { useState } from "react"

export default function PhoneMockup() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative flex justify-center">
      {/* Softer background glow (reduced noise) */}
      <div className="pointer-events-none absolute right-[-60px] top-20 h-64 w-64 rounded-full bg-[#FFB38A]/20 blur-3xl" />
      <div className="pointer-events-none absolute left-[-40px] bottom-10 h-72 w-72 rounded-full bg-[#8E44AD]/10 blur-3xl" />

      {/* Phone container (removed float animation) */}
      <div className="relative h-[620px] w-[300px]">
        {/* Subtle outer glow (reduced intensity) */}
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-tr from-[#8E44AD]/10 to-[#FFB38A]/10 blur-2xl" />

        {/* Phone frame */}
        <div className="relative h-full w-full rounded-[42px] bg-black p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
          <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
            {/* Notch */}
            <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black shadow-inner" />

            {/* Loading placeholder */}
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-[#FFF7EF]" />
            )}

            {/* Video */}
            <video
              src="/IDK-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Glass overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}