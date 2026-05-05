type Ingredient = {
  ingredient: string
  amount: string
  unit: string
}

type Props = {
  ingredients: Ingredient[]
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}

export default function IngredientsSection({
  ingredients,
  setIngredients
}: Props) {
  function updateIngredient(
    index: number,
    field: keyof Ingredient,
    value: string
  ) {
    const updated = [...ingredients]
    updated[index][field] = value
    setIngredients(updated)
  }

  function addIngredient() {
    setIngredients([
      ...ingredients,
      { ingredient: "", amount: "", unit: "" }
    ])
  }

  function removeIngredient(index: number) {
    setIngredients(ingredients.filter((_, i) => i !== index))
  }

  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#533F2E]">
          Ingredients
        </h2>

        <button
          type="button"
          onClick={addIngredient}
          className="rounded-full bg-[#8E44AD]/10 px-4 py-2 font-medium text-[#8E44AD]"
        >
          + Add Ingredient
        </button>
      </div>

      <div className="space-y-4">
        {ingredients.map((item, index) => (
          <div
            key={index}
            className="grid gap-3 md:grid-cols-[2fr_1fr_1fr_auto]"
          >
            <input
              value={item.ingredient}
              onChange={(e) =>
                updateIngredient(index, "ingredient", e.target.value)
              }
              placeholder="Ingredient"
              className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
            />

            <input
              type="number"
              step="0.01"
              value={item.amount}
              onChange={(e) =>
                updateIngredient(index, "amount", e.target.value)
              }
              placeholder="Amount"
              className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
            />

            <input
              value={item.unit}
              onChange={(e) =>
                updateIngredient(index, "unit", e.target.value)
              }
              placeholder="Unit"
              className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
            />

            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="rounded-[20px] border border-[#D9CBB6] px-4 text-[#8A7A67] hover:bg-red-50"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}