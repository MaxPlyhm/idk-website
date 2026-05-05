export default function CareersSection() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
          Still early
        </p>

        <h2 className="mb-4 text-3xl font-bold text-[#533F2E]">
          Come build IDK with us
        </h2>

        <p className="mb-8 text-lg leading-8 text-[#6A5A48]">
          We are just getting started. If you care about taste, data, or building
          something people use every day and have fun while doing it, come talk to us. 
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#8E44AD] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
        >
          Get in touch
          <span>→</span>
        </a>
      </div>
    </section>
  )
}