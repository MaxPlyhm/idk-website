"use client"

import { useState } from "react"

import AboutSection from "./sections/AboutSection"
import BasicsSection from "./sections/BasicsSection"
import FoodSection from "./sections/FoodSection"
import DetailsSection from "./sections/DetailsSection"

export default function RestaurantForm() {
  const [startedAt] = useState(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Date.now() - startedAt < 3000) {
      alert("Please take a moment before submitting.")
      return
    }

    const formData = new FormData(e.currentTarget)

    const cuisines = (formData.get("cuisines") as string)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)

    const foodTypes = (formData.get("foodTypes") as string)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)

    const vibeTags = (formData.get("vibeTags") as string)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)

    if (!formData.get("name") || !formData.get("address")) {
      alert("Please fill in the restaurant name and address.")
      return
    }

    const data = {
      website: formData.get("website"), // honeypot

      name: formData.get("name"),
      address: formData.get("address"),
      city: formData.get("city"),

      description: formData.get("description"),

      image_url: formData.get("image_url"),
      website_url: formData.get("website_url"),
      phone: formData.get("phone"),

      cuisines,
      foodTypes,
      vibeTags,

      price_range: formData.get("price_range"),
      is_chain: formData.get("is_chain") === "true",

      opening_hours_text: formData.get("opening_hours"),

      tags: [...foodTypes, ...vibeTags],

      submitted_by: {
        name: formData.get("submitter_name"),
        email: formData.get("submitter_email")
      },

      submitted_after_ms: Date.now() - startedAt,

      business_status: "PENDING_REVIEW",
      source: "user_submission"
    }

    try {
      const response = await fetch("/api/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      alert("Restaurant submitted!")
      e.currentTarget.reset()

    } catch {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <AboutSection />
      <BasicsSection />
      <FoodSection />
      <DetailsSection />

      <button
        type="submit"
        className="w-full rounded-full bg-[#8E44AD] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Submit Restaurant
      </button>
    </form>
  )
}