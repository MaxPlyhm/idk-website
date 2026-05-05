import PhoneMockup from "./PhoneMockup"

export default function HeroSection() {
  return (
    <section className="relative px-6 pb-24 pt-16 md:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#533F2E] md:text-7xl lg:text-[88px]">
            You’re probably{" "}
            <span className="relative inline-block text-[#8E44AD]">
              craving
              <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-[#FFB38A]/50" />
            </span>
            <br />
            something.
          </h1>

          <div className="mt-6 inline-flex items-center rounded-full border border-[#E7D9C8] bg-[#FFF7EF]/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#8A7A67]">
            From Popular to Personal
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#6A5A48] md:text-xl">
            IDK helps you move from popular food trends to recommendations that
            actually fit your taste, your plans, and what sounds good right now.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full bg-[#8E44AD] px-7 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(142,68,173,0.3)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <span>Get the App</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D9CBB6] bg-white/60 px-7 py-4 font-semibold text-[#533F2E] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <span>Talk to us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/60 bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#6A5A48] backdrop-blur-md">
              Personalized
            </span>

            <span className="rounded-full border border-white/60 bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.22em] text-[#6A5A48] backdrop-blur-md">
              Explainable
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -top-10 right-10 h-72 w-72 rounded-full bg-[#FFB38A]/30 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[#8E44AD]/20 blur-3xl" />

          <div className="relative transition-transform duration-500 hover:scale-[1.02]">
            <PhoneMockup />
          </div>

          <div className="absolute -left-4 top-12 hidden rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur-md lg:block">
            <p className="mb-1 text-xs uppercase tracking-widest text-[#8A7A67]">
              Why this?
            </p>
            <p className="max-w-[190px] font-semibold leading-snug text-[#533F2E]">
              Because it fits your taste, time, and mood.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}