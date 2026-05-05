import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body.website) {
      return Response.json({ success: true })
    }

    if (body.submitted_after_ms < 3000) {
      return Response.json(
        { success: false, error: "Too fast" },
        { status: 400 }
      )
    }

    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "IDK Website <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL as string],
      reply_to: body.email,
      subject: `New IDK contact message from ${body.name}`,
      text: `
Name: ${body.name}
Email: ${body.email}
Reason: ${body.reason || "Not specified"}

Message:
${body.message}
      `
    })

    if (error) {
      console.error("Resend error:", error)

      return Response.json(
        { success: false, error: "Resend failed" },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      id: data?.id
    })
  } catch (error) {
    console.error("Contact route error:", error)

    return Response.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}