"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [index, setIndex] = useState(0)

  const messages = [
    "Looking at what people love",
    "Learning your taste",
    "Finding something that fits",
    "From popular to personal"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 1400)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FEF9F2]">
      {/* background glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FFB38A]/20 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#8E44AD]/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Orb */}
        <div className="relative mb-10 flex h-28 w-28 items-center justify-center">
          <div className="absolute h-28 w-28 animate-pulse rounded-full bg-[#8E44AD]/10" />
          <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-[#8E44AD] to-[#C184E3] opacity-90 blur-sm" />
          <div className="relative h-14 w-14 rounded-full bg-white shadow-[0_10px_30px_rgba(142,68,173,0.18)]" />
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#8A7A67]">
          IDK
        </p>

        <h2 className="min-h-[64px] max-w-md text-center text-3xl font-bold leading-tight text-[#533F2E] transition-all duration-500">
          {messages[index]}
        </h2>

        <div className="mt-8 flex gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#8E44AD]" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#8E44AD]"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-[#8E44AD]"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </main>
  )
}