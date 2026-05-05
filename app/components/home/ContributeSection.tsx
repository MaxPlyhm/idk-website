export default function ContributeSection() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl rounded-[36px] bg-gradient-to-br from-[#8E44AD] to-[#B56AD3] px-8 py-14 text-white shadow-[0_20px_60px_rgba(142,68,173,0.25)]">
        <h2 className="mb-6 text-3xl font-bold">
          Help shape how IDK learns taste
        </h2>

        <p className="mb-8 text-white/90 leading-7">
          The more real input we get, the better recommendations become.
          Share what you love — recipes, restaurants, or both.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/share-recipe"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#8E44AD] transition-all duration-300 hover:scale-[1.04]"
          >
            Submit Recipe
          </a>

          <a
            href="/add-restaurant"
            className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Add Restaurant
          </a>
        </div>
      </div>
    </section>
  )
}