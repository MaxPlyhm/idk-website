import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

export async function POST(req: Request) {
  try {

    const body = await req.json()

    // Honeypot spam protection
    if (body.website) {
      return Response.json({ success: true })
    }

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db("recipe_db")

    const result = await db.collection("recipe").insertOne({
      ...body,

      approved: false,

      rating: null,
      review_count: 0,

      created_at: new Date()
    })

    await client.close()

    return Response.json({
      success: true,
      id: result.insertedId
    })

  } catch (error) {

    return Response.json(
      { success: false, error: "Failed to save recipe" },
      { status: 500 }
    )

  }
}