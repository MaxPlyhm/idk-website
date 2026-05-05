export default function OriginStory() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8A7A67]">
            The Beginning
          </p>

          <h2 className="max-w-md text-4xl font-bold leading-tight text-[#533F2E] md:text-5xl">
            It started with a question we ask almost every day.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#6A5A48]">
          <p>
            Whether you’re at home, traveling, or deciding with friends and
            family, the question always comes up.
          </p>

          <div className="rounded-[36px] border border-white/50 bg-white/80 px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
            <p className="text-3xl font-bold leading-tight text-[#533F2E] md:text-5xl">
              “What should we eat right now?”
            </p>
          </div>

          <p>
            And the answer is usually one of two things:{" "}
            <span className="font-semibold text-[#533F2E]">
              “I don’t know”
            </span>{" "}
            or{" "}
            <span className="font-semibold text-[#533F2E]">
              “I’m up for anything.”
            </span>
          </p>

          <p>
            One app shows popular restaurants. Another has recipes. Another
            saves places you wanted to try. But none of them really solve the
            decision itself.
          </p>

          <p>
            So we started building IDK: a way to understand your taste, explain
            why something fits, and help you decide whether you’re eating at
            home, going out, or discovering food somewhere new.
          </p>
        </div>
      </div>
    </section>
  )
}