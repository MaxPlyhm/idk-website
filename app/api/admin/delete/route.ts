import { MongoClient, ObjectId } from "mongodb"

const uri = process.env.MONGODB_URI as string

export async function POST(req: Request) {

  const form = await req.formData()
  const id = form.get("id")

  const client = new MongoClient(uri)
  await client.connect()

  const db = client.db("recipe_db")

  await db.collection("recipe").deleteOne({
    _id: new ObjectId(id as string)
  })

  await client.close()

  return Response.redirect(new URL("/admin/recipes", req.url))
}