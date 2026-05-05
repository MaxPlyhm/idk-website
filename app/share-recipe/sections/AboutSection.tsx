export default function AboutSection() {
  return (
    <section className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
      <h2 className="mb-6 text-2xl font-bold text-[#533F2E]">
        About You
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="submitter_name"
          placeholder="Your name"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />

        <input
          name="submitter_email"
          type="email"
          placeholder="Email (optional)"
          className="rounded-[20px] border border-[#D9CBB6] bg-white p-3 text-[#533F2E]"
        />
      </div>
    </section>
  )
}