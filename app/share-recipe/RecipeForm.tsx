"use client"

import { useState } from "react"

import AboutSection from "./sections/AboutSection"
import BasicsSection from "./sections/BasicsSection"
import IngredientsSection from "./sections/IngredientsSection"
import InstructionsSection from "./sections/InstructionsSection"
import DetailsSection from "./sections/DetailsSection"

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState([
    { ingredient: "", amount: "", unit: "" }
  ])

  const [instructions, setInstructions] = useState([""])

  const [startedAt] = useState(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Prevent bots submitting instantly
    if (Date.now() - startedAt < 3000) {
      alert("Please take a moment before submitting.")
      return
    }

    const validIngredients = ingredients.filter((item) =>
      item.ingredient.trim()
    )

    const validInstructions = instructions.filter((step) =>
      step.trim()
    )

    // Require at least one ingredient + instruction
    if (validIngredients.length === 0 || validInstructions.length === 0) {
      alert("Please add at least one ingredient and one instruction.")
      return
    }

    const formData = new FormData(e.currentTarget)

    const prep = Number(formData.get("prep_time_minutes"))
    const cook = Number(formData.get("cook_time_minutes"))

    const data = {
      // Honeypot field
      website: formData.get("website"),

      name: formData.get("name"),
      description: formData.get("description"),

      cuisine: [formData.get("cuisine")],
      category: formData.get("category"),

      image_url: formData.get("image_url"),

      ingredients: validIngredients.map((item) => ({
        ingredient: item.ingredient,
        amount: Number(item.amount),
        unit: item.unit
      })),

      instructions: validInstructions,

      prep_time_minutes: prep,
      cook_time_minutes: cook,
      total_time_minutes: prep + cook,

      servings: Number(formData.get("servings")),
      difficulty: formData.get("difficulty"),

      tags: (formData.get("tags") as string)
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),

      submitted_by: {
        name: formData.get("submitter_name"),
        email: formData.get("submitter_email")
      },

      submitted_after_ms: Date.now() - startedAt,

      source: "user_submission"
    }

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      alert("Recipe submitted!")

      // Optional reset after successful submit
      e.currentTarget.reset()
      setIngredients([{ ingredient: "", amount: "", unit: "" }])
      setInstructions([""])

    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <AboutSection />

      <BasicsSection />

      <IngredientsSection
        ingredients={ingredients}
        setIngredients={setIngredients}
      />

      <InstructionsSection
        instructions={instructions}
        setInstructions={setInstructions}
      />

      <DetailsSection />

      <button
        type="submit"
        className="w-full rounded-full bg-[#8E44AD] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        Submit Recipe
      </button>
    </form>
  )
}