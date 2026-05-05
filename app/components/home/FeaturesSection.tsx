const features = [
  {
    label: "Understands your taste",
    title: "Recommendations that actually feel like you",
    description:
      "IDK learns what you like over time and adjusts — so suggestions stop feeling random and start making sense.",
    accent: "from-[#8E44AD] to-[#B56AD3]"
  },
  {
    label: "Explains why",
    title: "You always know why something fits",
    description:
      "Instead of guessing, IDK tells you why a recommendation works — based on your taste, your context, and your habits.",
    accent: "from-[#FFB38A] to-[#FFD7BE]"
  },
  {
    label: "Real-life planning",
    title: "From tonight to your whole week",
    description:
      "Plan dinners for the week or get restaurant ideas for a trip — not just one suggestion, but a full plan.",
    accent: "from-[#FFE6CF] to-[#FFF7EF]"
  }
]

export default function FeaturesSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
            Why IDK feels different
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
            Food decisions that feel less random — and more personal.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-[36px] border border-white/50 bg-white/70 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              {/* Accent block (simplified) */}
              <div
                className={`mb-6 h-14 w-14 rounded-xl bg-gradient-to-br ${feature.accent}`}
              />

              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8A7A67]">
                {feature.label}
              </p>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-[#533F2E]">
                {feature.title}
              </h3>

              <p className="leading-7 text-[#6A5A48]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}