export default function FoodSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        Food & Atmosphere
      </h2>

      <div className="space-y-4">
        <input
          name="cuisines"
          placeholder="Cuisines (comma separated)"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="foodTypes"
          placeholder="Food types (comma separated)"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="vibeTags"
          placeholder="Vibe tags (cozy, trendy, family-friendly...)"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <div className="flex items-center gap-3 rounded-[20px] border border-[#D9CBB6] bg-white p-4">
          <input
            id="is_chain"
            type="checkbox"
            name="is_chain"
            value="true"
            className="h-5 w-5 accent-[#8E44AD]"
          />

          <label htmlFor="is_chain" className="text-[#533F2E]">
            This restaurant is part of a chain
          </label>
        </div>
      </div>
    </section>
  )
}