import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Honeypot protection
    if (body.website) {
      return Response.json({ success: true })
    }

    // Too-fast protection
    if (body.submitted_after_ms < 3000) {
      return Response.json(
        { success: false, error: "Too fast" },
        { status: 400 }
      )
    }

    const client = new MongoClient(uri)
    await client.connect()

    const db = client.db("recipe_db")

    const result = await db.collection("restaurants").insertOne({
      ...body,

      business_status: "PENDING_REVIEW",

      rating: 0,
      review_count: 0,

      tags: body.tags || [],

      created_at: new Date(),
      updated_at: new Date()
    })

    await client.close()

    return Response.json({
      success: true,
      id: result.insertedId
    })

  } catch {
    return Response.json(
      { success: false, error: "Failed to save restaurant" },
      { status: 500 }
    )
  }
}