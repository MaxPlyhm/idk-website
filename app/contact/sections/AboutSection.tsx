export default function AboutSection() {
  return (
    <section className="rounded-[36px] border border-white/50 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="mb-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8A7A67]">
          About you
        </p>

        <h2 className="text-2xl font-bold text-[#533F2E]">
          Tell us who’s reaching out.
        </h2>
      </div>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white/90 p-4 text-[#533F2E] outline-none transition focus:border-[#8E44AD] focus:ring-2 focus:ring-[#8E44AD]/15"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white/90 p-4 text-[#533F2E] outline-none transition focus:border-[#8E44AD] focus:ring-2 focus:ring-[#8E44AD]/15"
        />

        <select
          name="reason"
          className="w-full rounded-[20px] border border-[#D9CBB6] bg-white/90 p-4 text-[#533F2E] outline-none transition focus:border-[#8E44AD] focus:ring-2 focus:ring-[#8E44AD]/15"
        >
          <option value="">What are you reaching out about?</option>
          <option value="investor">Investment / fundraising</option>
          <option value="partnership">Partnership</option>
          <option value="team">Joining the team</option>
          <option value="feedback">Product feedback</option>
          <option value="other">Other</option>
        </select>
      </div>
    </section>
  )
}