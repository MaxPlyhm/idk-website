export default function DetailsSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        Contact & Extra Details
      </h2>

      <div className="space-y-4">
        <input
          name="phone"
          placeholder="Phone number"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="website_url"
          placeholder="Website URL"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <textarea
          name="opening_hours"
          rows={4}
          placeholder={`Opening hours (optional)

Example:
Mon-Fri: 11:00-22:00
Sat: 12:00-23:00
Sun: Closed`}
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />
      </div>
    </section>
  )
}