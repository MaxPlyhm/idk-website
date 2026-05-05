"use client"

import { useState } from "react"

import AboutSection from "./sections/AboutSection"
import MessageSection from "./sections/MessageSection"

export default function ContactForm() {
  const [startedAt] = useState(Date.now())
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget

    setSuccess(false)
    setError(false)

    if (Date.now() - startedAt < 3000) {
      setError(true)
      return
    }

    const formData = new FormData(form)

    const data = {
      website: formData.get("website"),
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
      submitted_after_ms: Date.now() - startedAt,
    }

    try {
      setLoading(true)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Request failed")
      }

      form.reset()
      setSuccess(true)
      setError(false)
    } catch (err) {
      console.error("Contact form error:", err)
      setSuccess(false)
      setError(true)
    } finally {
      setLoading(false)
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
      <MessageSection />

      {success && (
        <p className="text-center text-sm text-green-600">
          Message sent — we’ll get back to you soon.
        </p>
      )}

      {error && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#8E44AD] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}