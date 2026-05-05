import RecipeForm from "./RecipeForm"

export default function ShareRecipePage() {
  return (
    <main className="min-h-screen bg-[#FEF9F2] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#533F2E]">
            Share a recipe
          </h1>

          <p className="text-lg text-[#6A5A48]">
            Help the community discover something delicious.
          </p>
        </div>

        <RecipeForm />
      </div>
    </main>
  )
}