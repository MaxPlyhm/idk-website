export default function ClosingSection() {
  return (
    <section className="px-6 pb-24 pt-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#8A7A67]">
          Still early
        </p>

        <p className="text-2xl leading-10 text-[#533F2E] md:text-3xl md:leading-[1.5]">
          We’re still building, still learning, and still trying to solve one
          simple problem:
        </p>

        <p className="mt-8 text-4xl font-bold text-[#8E44AD] md:text-5xl">
          “What should you eat?”
        </p>

        <p className="mt-10 text-lg text-[#6A5A48]">
          If you’re curious, building something similar, or just want to follow
          along — we’d love to hear from you.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8E44AD] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
        >
          Get in touch
          <span>→</span>
        </a>
      </div>
    </section>
  )
}