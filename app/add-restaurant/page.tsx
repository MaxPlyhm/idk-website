import RestaurantForm from "./RestaurantForm"

export default function AddRestaurantPage() {
  return (
    <main className="min-h-screen bg-[#FEF9F2] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#533F2E]">
            Add a restaurant
          </h1>

          <p className="text-lg text-[#6A5A48]">
            Help others discover great places to eat.
          </p>
        </div>

        <RestaurantForm />
      </div>
    </main>
  )
}