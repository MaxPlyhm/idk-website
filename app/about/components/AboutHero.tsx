export default function AboutHero() {
  return (
    <section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#8A7A67]">
          About IDK
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#533F2E] md:text-7xl lg:text-[88px]">
          Most food apps show you options.
          <span className="block text-[#8E44AD]">
            We try to make the decision.
          </span>
        </h1>

        <div className="mt-8 inline-flex items-center rounded-full border border-[#E7D9C8] bg-white/70 px-5 py-3 text-xs uppercase tracking-[0.3em] text-[#8A7A67] backdrop-blur-md">
          From Popular to Personal
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-[#6A5A48] md:text-xl">
          IDK is built around a simple idea: food recommendations should adapt
          to your taste, your context, and your life — not just what’s trending.
        </p>
      </div>
    </section>
  )
}