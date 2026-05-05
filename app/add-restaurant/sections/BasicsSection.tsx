export default function BasicsSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        Restaurant Basics
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Restaurant name"
          required
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="address"
          placeholder="Street address"
          required
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="city"
            placeholder="City"
            className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
          />

          <select
            name="price_range"
            className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
          >
            <option value="">Price range</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="Describe the restaurant..."
          rows={4}
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="image_url"
          placeholder="Image URL"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />
      </div>
    </section>
  )
}