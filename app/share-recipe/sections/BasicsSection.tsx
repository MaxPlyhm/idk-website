export default function BasicsSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        Recipe Basics
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Recipe name"
          required
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <textarea
          name="description"
          placeholder="Describe your recipe..."
          rows={4}
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="cuisine"
            placeholder="Cuisine (Italian, Thai, etc.)"
            className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
          />

          <select
            name="category"
            className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
          >
            <option value="">Select category</option>
            <option value="main">Main</option>
            <option value="starter">Starter</option>
            <option value="side">Side</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        <input
          name="image_url"
          placeholder="Image URL"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />
      </div>
    </section>
  )
}