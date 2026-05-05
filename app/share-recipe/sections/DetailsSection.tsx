export default function DetailsSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        Recipe Details
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="prep_time_minutes"
          type="number"
          placeholder="Prep time (minutes)"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="cook_time_minutes"
          type="number"
          placeholder="Cook time (minutes)"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="servings"
          type="number"
          placeholder="Servings"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <select
          name="difficulty"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <input
        name="tags"
        placeholder="Tags (comma separated)"
        className="mt-4 w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
      />
    </section>
  )
}