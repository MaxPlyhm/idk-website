export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Tell IDK what kind of decision you need",
      description:
        "A quick dinner, a restaurant nearby, a family meal plan, or food ideas for an upcoming trip."
    },
    {
      number: "02",
      title: "IDK matches popularity with your personal context",
      description:
        "It looks at taste, mood, location, habits, and what people around you are enjoying."
    },
    {
      number: "03",
      title: "You get a suggestion — plus the reason behind it",
      description:
        "Not just what to eat, but why it makes sense for you right now."
    }
  ]

  return (
    <section className="bg-[#FFF7EF]/80 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
              How it works
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
              From popular to personal, in three steps.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#6A5A48]">
              IDK turns food discovery into a decision system — one that adapts
              to your taste, your plans, and your real life.
            </p>
          </div>

          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[32px] border border-white/50 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md"
              >
                <div className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8E44AD]">
                  {step.number}
                </div>

                <h3 className="mb-3 text-2xl font-bold leading-tight text-[#533F2E]">
                  {step.title}
                </h3>

                <p className="leading-7 text-[#6A5A48]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}