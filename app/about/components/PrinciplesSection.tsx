const principles = [
  {
    label: "01",
    title: "From popular to personal",
    description:
      "Start with what people love, then refine it around your taste, habits, and preferences — until it actually fits you."
  },
  {
    label: "02",
    title: "Explain the decision",
    description:
      "Recommendations shouldn’t feel random. You should always understand why something is being suggested."
  },
  {
    label: "03",
    title: "Built for real decisions",
    description:
      "Weeknight dinners, group choices, travel plans — food decisions happen in context, not in isolation."
  }
]

export default function PrinciplesSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
            Our principles
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
            What we think food apps should actually do.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[36px] border border-white/50 bg-white/75 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-[#8E44AD]">
                {principle.label}
              </p>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-[#533F2E]">
                {principle.title}
              </h3>

              <p className="leading-7 text-[#6A5A48]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}