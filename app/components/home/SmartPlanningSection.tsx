export default function SmartPlanningSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
            More than recommendations
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
            IDK tells you why — and helps you plan ahead.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6A5A48]">
            From popular to personal means more than just finding something to
            eat. We explain why a suggestion fits you, help plan your week, and
            even build restaurant itineraries for your next trip.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left large card */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-md">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#8E44AD]/10 blur-3xl" />

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8A7A67]">
              WHY THIS?
            </p>

            <h3 className="max-w-md text-3xl font-bold leading-tight text-[#533F2E]">
              We explain every recommendation.
            </h3>

            <p className="mt-5 max-w-lg text-[#6A5A48] leading-7">
              Instead of giving you a random restaurant or recipe, IDK tells you
              exactly why it fits: because you liked something similar, because
              it matches what people near you love, or because it works with
              what you already have at home.
            </p>

            <div className="mt-8 rounded-[28px] bg-[#FFF7EF] p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#8A7A67]">
                Example
              </p>

              <p className="mt-3 text-[#533F2E] leading-7">
                “We suggested creamy mushroom pasta because you usually save
                comforting Italian dishes, you already have mushrooms and cream
                at home, and similar recipes are trending nearby tonight.”
              </p>
            </div>
          </div>

          {/* Right stacked cards */}
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#8E44AD] to-[#B56AD3] p-8 text-white shadow-[0_20px_50px_rgba(142,68,173,0.25)]">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
                WEEK PLANNING
              </p>

              <h3 className="text-2xl font-bold leading-tight">
                Busy week? We can plan dinner for all of it.
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                Perfect for a busy family, a tired parent, or anyone who doesn’t
                want to decide what to cook every night.
              </p>

              <div className="mt-6 rounded-[24px] bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm leading-7">
                  Monday — Quick chicken tacos
                  <br />
                  Tuesday — Pasta with leftovers
                  <br />
                  Wednesday — Easy takeout nearby
                  <br />
                  Thursday — Sheet-pan salmon
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[36px] border border-white/50 bg-white/80 p-8 backdrop-blur-md">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8A7A67]">
                TRAVEL MODE
              </p>

              <h3 className="text-2xl font-bold leading-tight text-[#533F2E]">
                Going somewhere? We’ll build you a food itinerary.
              </h3>

              <p className="mt-4 leading-7 text-[#6A5A48]">
                Tell us where you’re going and what you like, and IDK can build
                a list of restaurants, cafés, and must-try dishes for your trip.
              </p>

              <div className="mt-6 rounded-[24px] bg-[#FFF7EF] p-4">
                <p className="text-sm text-[#533F2E] leading-7">
                  Friday morning — Coffee + pastry nearby
                  <br />
                  Friday night — Cozy local dinner spot
                  <br />
                  Saturday — Best lunch near your hotel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}