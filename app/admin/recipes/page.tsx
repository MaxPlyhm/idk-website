import { MongoClient, ObjectId } from "mongodb"

const uri = process.env.MONGODB_URI as string

async function getPendingRecipes() {
  const client = new MongoClient(uri)
  await client.connect()

  const db = client.db("recipe_db")

  const recipes = await db
    .collection("recipe")
    .find({ approved: false })
    .toArray()

  await client.close()

  return recipes
}

export default async function AdminRecipes() {

  const recipes = await getPendingRecipes()

  return (
    <div className="min-h-screen bg-[#fef9f2] p-12">

      <h1 className="text-3xl font-bold text-[#533f2e] mb-10">
        Pending Recipe Submissions
      </h1>

      {recipes.length === 0 && (
        <p className="text-[#6a5a48]">
          No pending recipes.
        </p>
      )}

      <div className="space-y-8">

        {recipes.map((recipe: any) => (

          <div
            key={recipe._id}
            className="bg-white p-8 rounded-[30px] shadow-sm"
          >

            <h2 className="text-2xl font-semibold text-[#533f2e]">
              {recipe.name}
            </h2>

            <p className="text-[#6a5a48] mt-3">
              {recipe.description}
            </p>

            {/* Ingredients */}

            {recipe.ingredients && (
              <div className="mt-6">

                <h3 className="font-semibold text-[#533f2e] mb-2">
                  Ingredients
                </h3>

                <ul className="list-disc pl-6 text-[#6a5a48]">

                  {recipe.ingredients.map((i: any, idx: number) => (
                    <li key={idx}>
                      {i.amount} {i.unit} {i.ingredient}
                    </li>
                  ))}

                </ul>

              </div>
            )}

            {/* Instructions */}

            {recipe.instructions && (
              <div className="mt-6">

                <h3 className="font-semibold text-[#533f2e] mb-2">
                  Instructions
                </h3>

                <ol className="list-decimal pl-6 text-[#6a5a48] space-y-1">

                  {recipe.instructions.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}

                </ol>

              </div>
            )}

            {/* Submitter */}

            {recipe.submitted_by && (
              <p className="mt-6 text-sm text-[#8a7a67]">
                Submitted by: {recipe.submitted_by.name}
              </p>
            )}

            {/* Actions */}

            <div className="flex gap-4 mt-6">

              <form action="/api/admin/approve" method="POST">

                <input
                  type="hidden"
                  name="id"
                  value={recipe._id.toString()}
                />

                <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
                  Approve
                </button>

              </form>

              <form action="/api/admin/delete" method="POST">

                <input
                  type="hidden"
                  name="id"
                  value={recipe._id.toString()}
                />

                <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
                  Delete
                </button>

              </form>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}