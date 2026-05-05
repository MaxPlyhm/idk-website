export default function MessageSection() {
  return (
    <section className="rounded-[36px] border border-white/50 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
      <div className="mb-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8A7A67]">
          Your message
        </p>

        <h2 className="text-2xl font-bold text-[#533F2E]">
          What would you like to share?
        </h2>
      </div>

      <textarea
        name="message"
        rows={7}
        required
        placeholder="Tell us a bit about why you're reaching out — ideas, questions, interest, or anything else."
        className="w-full rounded-[20px] border border-[#D9CBB6] bg-white/90 p-4 text-[#533F2E] outline-none transition resize-none focus:border-[#8E44AD] focus:ring-2 focus:ring-[#8E44AD]/15"
      />
    </section>
  )
}